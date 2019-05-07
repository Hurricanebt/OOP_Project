import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';

import { login } from '../actions/userActions';
import { refresh } from '../actions/userActions';

class LoginContainer extends React.Component {
    render() {
        return (
            <Login error={this.props.error} login={this.props.login} refresh={this.props.refresh} />
        )
    }
}

const mapStateToProps = store => {
    return {
        error: store.user.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        refresh: () => dispatch(refresh())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);