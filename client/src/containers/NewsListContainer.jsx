import React from 'react';
import { connect } from 'react-redux';

import NewsList from '../components/NewsList';

import { getNews, createNews, deleteNews, refresh } from '../actions/newsListActions';

class NewsListContainer extends React.Component {
    render() {
        return (
            <NewsList 
                user={this.props.user} 
                newsList={this.props.newsList}
                getNews={this.props.getNews} 
                createNews={this.props.createNews} 
                deleteNews={this.props.deleteNews}
                refresh={this.props.refresh}
            />
        )
    }
}

const mapStateToPtops = store => {
    return {
        user: store.user,
        newsList: store.newsList,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createNews: (title, text, authorID) => dispatch(createNews(title, text, authorID)),
        deleteNews: (newsID) => dispatch(deleteNews(newsID)),
        getNews: () => dispatch(getNews()),
        refresh: () => dispatch(refresh())
    }
};

export default connect(mapStateToPtops, mapDispatchToProps)(NewsListContainer);