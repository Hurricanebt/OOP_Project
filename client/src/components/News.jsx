import React from 'react';

import { getdate } from '../utils/getdate';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            date: '',
            text: '',
            author: ''
        }
    }

    componentWillMount() {
        this.getNewsByID();
    }

    getNewsByID = () => {
        fetch(`http://localhost:4000/api/getnewsbyid?id=${this.props.id}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    date: data.publicationTime,
                    text: data.text,
                });
                this.getAuthorName(data.authorID)
            });
        
    }
        
    getAuthorName = (author) => {
        fetch(`http://localhost:4000/api/getuserbyid?id=${author}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
            .then(data => data.json())
            .then(data => {
                this.setState({
                    author: data.lastName + ' ' + data.firstName
                })
            });
    }

    render() {
        return (
            <div id="news" className="container">
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
        );
    }
}

export default News;