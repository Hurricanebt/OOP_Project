import React from 'react';
import { connect } from "react-redux";

import Profile from '../components/Profile';
import {editProfile, refresh} from "../actions/userActions";

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile user={this.props.user} editProfile={this.props.editProfile} refresh={this.props.refresh}/>
        );
    }
}

const mapStateToProps = store => {
    return { 
        user: store.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        editProfile: (lastName, firstName, about, imageURL, userID) => dispatch(editProfile(lastName, firstName, about, imageURL, userID)),
        refresh: () => dispatch(refresh())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);