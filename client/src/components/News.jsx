import React from 'react';

import { getdate } from '../utils/getdate';
import { encodeBody } from "../utils/encode";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            text: '',
            author: '',
            comments: [],
            commentText: ''
        }
    }

    componentWillMount() {
        this.getNewsByID();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getNewsByID = () => {
        fetch(`http://localhost:4000/api/getnewsbyid?id=${this.props.id}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
            })
            .then(data => data.json())
            .then(async (data) => {
                this.setState({
                    title: data.title,
                    date: data.publicationTime,
                    text: data.text,
                    author: await this.getUserName(data.authorID),
                    comments: await this.getComments(data.comments)
                });
            });
    };
        
    getUserName = async (userID) => {
        return await fetch(`http://localhost:4000/api/getuserbyid?id=${userID}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
            })
            .then(data => data.json())
            .then(data => data.lastName + ' ' + data.firstName);
    };

    handleAddComment = () => {
        fetch('http://localhost:4000/api/addcomment',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            body: encodeBody({
                "userID": this.props.user.userID,
                "newsID": this.props.id,
                "text": this.state.commentText
            })
        })
        .then(data => data.json())
        .then(async data => {
            this.setState({
                comments: await this.getComments(data),
                commentText: ''
            });
        });
    };
    handleDeleteCommentButton = (e) => {
        fetch('http://localhost:4000/api/deletecomment',{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: "POST",
            body: encodeBody({
                "newsID": this.props.id,
                "commentID": e.target.getAttribute('name'),
            })
        })
        .then(data => data.json())
        .then(async data => {
            this.setState({
                comments: await this.getComments(data),
                commentText: ''
            });
        });
    }

    getComments = async (comments) => {
        const result = comments.map(async item => {
            const userName = await this.getUserName(item.userID);
            return {
                ...item,
                userName
            }
        })
        return Promise.all(result);
    };

    renderCommentsForm = () => {
        if (this.props.user.isLogin === false) return;
        return (
            <div className="add-comment-form">
                <input autoComplete= "off" type="text" name="commentText" onChange={this.handleChange} value={this.state.commentText}/>
                { this.state.commentText !== '' ? (
                    <i className="fas fa-caret-square-right" onClick={this.handleAddComment}></i>
                ) : null }
            </div>
        )
    };

    renderComments = () => {
        const comments = this.state.comments.map(item => (
            <div className="comment" key={item._id}>
                <div className="comment_header">
                    <div className="comment_author">
                        <h3>{ item.userName }</h3>
                        { (item.userID === this.props.user.userID) || this.props.user.isAdmin ? <i name={item._id} onClick={this.handleDeleteCommentButton} className="fas fa-trash-alt"></i> : null }
                    </div>
                    <div className="comment_date">
                        { getdate(item.publicationTime) }
                    </div>
                </div>
                <p> { item.text }</p>
            </div>
        ))

        return comments.reverse();
    }

    render() {
        return (
            <div id="news" className="container">
                <div className="main-content">
                    <div className="news_header">
                        <div className="news_title">
                            <h2>{ this.state.title }</h2>
                        </div>
                        <div className="news_date">
                            { getdate(this.state.date) }
                        </div>
                    </div>
                    <p>{ this.state.text }</p>
                    <p className="author">Автор: { this.state.author }</p>
                </div>
                <div className="comments">
                    { this.renderCommentsForm() }
                    { this.renderComments() }
                </div>
            </div>
        );
    }
}

export default News;