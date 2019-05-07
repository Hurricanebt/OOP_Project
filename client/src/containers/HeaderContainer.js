import React from 'react';
import { connect } from 'react-redux';

import { logout } from "../actions/userActions";

import Header from '../components/Header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header isLogin={this.props.isLogin} logout={this.props.logout}/>
        )
    }
}

const mapStateToProps = store => {
    return {
        isLogin: store.user.isLogin
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);