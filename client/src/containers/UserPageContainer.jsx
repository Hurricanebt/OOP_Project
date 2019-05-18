import React from 'react';
import { connect } from 'react-redux';

import UserPage from '../components/UserPage';

class UserPageContainer extends React.Component {
    render() {
        return (
            <UserPage id={ this.props.match.params.id }/>
        )
    }
}

export default connect(null, null)(UserPageContainer);