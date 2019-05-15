import React from 'react';
import { connect } from 'react-redux';

import News from '../components/News';

class NewsContainer extends React.Component {
    render() {
        return (
            <News id={ this.props.match.params.id }/>
        )
    }
}

export default connect(null, null)(NewsContainer);