import React from 'react';
import { connect } from 'react-redux';

import News from '../components/News';

import { getNewsByID, addComment, deleteComment } from '../actions/newsActions';

class NewsContainer extends React.Component {
    render() {
        return (
            <News
                id={ this.props.match.params.id }
                user={ this.props.user }
                news={ this.props.news}
                getNewsByID={ this.props.getNewsByID }
                addComment={ this.props.addComment }
                deleteComment={ this.props.deleteComment }
            />
        )
    }
}

const mapStateToPtops = store => {
    return {
        user: store.user,
        news: store.news
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getNewsByID: (newsID) => dispatch(getNewsByID(newsID)),
        addComment: (userID, newsID, text) => dispatch(addComment(userID, newsID, text)),
        deleteComment: (newsID, commentID) => dispatch(deleteComment(newsID, commentID))
    }
};

export default connect(mapStateToPtops, mapDispatchToProps)(NewsContainer);