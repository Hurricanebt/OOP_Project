import React from 'react';

import history from '../history';

class Profile extends React.Component {
    componentWillMount() {
        if (this.props.user.isLogin === false) history.push('/login');
    };

    render() {
        return (
            <div>
                Profile
            </div>
        );
    }
}

export default Profile;