import React from 'react';

import { getdate } from '../utils/getdate';

import { Link } from "react-router-dom";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        }
    }

    componentWillMount() {
        this.props.getNewsByID(this.props.id);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleAddComment = () => {
        this.props.addComment(this.props.user.userID, this.props.id, this.state.commentText);
        this.setState({commentText: ''});
    };

    handleDeleteCommentButton = (e) => {
        this.props.deleteComment(this.props.id, e.target.getAttribute('name'));
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
        const comments = this.props.news.comments.map(item => (
            <div className="comment" key={item._id}>
                <div className="comment_header">
                    <div className="comment_author">
                        <h3>
                            <Link to={item.userID === this.props.user.userID ? '/profile' : `/user${item.userID}`}>
                                { item.userName }
                            </Link>
                        </h3>
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
        const news = this.props.news;
        console.log(news);
        return (
            <div id="news" className="container">
                <div className="main-content">
                    <div className="news_header">
                        <div className="news_title">
                            <h2>{ news.title }</h2>
                        </div>
                        <div className="news_date">
                            { getdate(news.date) }
                        </div>
                    </div>
                    <p>{ news.text }</p>
                    <p className="author">
                        Автор: <Link to={news.authorID === this.props.user.userID ? '/profile' : `/user${news.authorID}`}>{ news.author }</Link>
                    </p>
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