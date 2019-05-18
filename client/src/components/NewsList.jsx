import React from 'react';
import { Link } from "react-router-dom";

import { getdate } from '../utils/getdate';

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
    }

    componentWillMount() {
        this.props.refresh();
        this.props.getNews();
        this.setState({news: this.props.newsList.news});
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCreateNewsButton = e => {
        e.preventDefault();
        const { title, text } = this.state;
        this.props.createNews(title, text, this.props.user.userID);
        this.setState({title: '', text: ''});
    };

    handleDeleteNewsButton = e => {
        this.props.deleteNews(e.target.getAttribute('name'));
    };

    renderAddNewsForm = () => {
        const error = this.props.newsList.error;
        return (
            <div className="news-form_inputs">
                <form autoComplete= "off">
                    <input
                        className={ error.invalidTitle ? "error" : null }
                        type="text"
                        placeholder="Заголовок"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <span className="error">{ error.invalidTitle }</span>
                    <textarea
                        className={ error.invalidText ? "error" : null } 
                        name="text" 
                        placeholder="Текст новости" 
                        value={this.state.text} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        className="news-form_button" 
                        type="submit" 
                        onClick={this.handleCreateNewsButton} 
                        value="Опубликовать"/>
                </form>
            </div>
        )
    };

    render() {
        const news = this.props.newsList.news.map(item => (
            <div className="news" key={item._id}>
                <div className="news_header">
                    <div className="news_title">
                        <Link to={`news${item._id}`}>{ item.title }</Link>
                        { this.props.user.isAdmin ? <i name={item._id} onClick={this.handleDeleteNewsButton} className="fas fa-trash-alt"></i> : null }
                    </div>
                    <div className="news_date">
                        { getdate(item.publicationTime) }
                    </div>
                </div>
                <p>{ item.text }</p>
            </div>
        ));

        return (
            <div id="news-list" className="container">
                { this.props.user.isAdmin ? this.renderAddNewsForm() : null }
                { news }
            </div>
        );
    }

    componentWillUnmount() {
        this.props.refresh();
    };
}

export default NewsList;