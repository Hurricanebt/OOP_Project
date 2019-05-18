import React from 'react';
import { connect } from 'react-redux';

import Registration from '../components/Registration';

import { registration } from '../actions/userActions';
import { refresh } from '../actions/userActions';

class RegistrationContainer extends React.Component {
    render() {
        return (
            <Registration user={this.props.user} registration={this.props.registration} refresh={this.props.refresh} />
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        registration: (firstName, lastName, imageURL, email, password) => {
            return dispatch(registration(firstName, lastName, imageURL, email, password))
        },
        refresh: () => dispatch(refresh())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);