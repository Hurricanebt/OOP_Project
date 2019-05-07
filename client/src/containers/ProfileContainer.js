import React from 'react';
import { connect } from "react-redux";

import Profile from '../components/Profile';

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile user={this.props.user}/>
        );
    }
}

const mapStateToProps = store => {
    return { 
        user: store.user
    }
};

export default connect(mapStateToProps, null)(ProfileContainer);