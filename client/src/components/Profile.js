import React from 'react';


import { getdate } from '../utils/getdate';
import history from '../history';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    componentWillMount() {
        if (this.props.user.isLogin === false) history.push('/login');
    };

    renderProfileInfo = () => {
        const { user } = this.props;

        return (
            <div id="profile">
                <div className="profile_header">
                    <h2>{`${user.lastName} ${user.firstName}`}</h2>
                    <div className="profile_button">Редактировать</div>
                </div>
                <div className="profile_main">
                    <div>
                        <img src={user.imageURL} alt=""/>
                    </div>
                    <div className="profile_personal-info">
                        <p><b>Фамилия:</b> {user.lastName}</p>
                        <p><b>Имя:</b> {user.firstName}</p>
                        <p><b>Дата регистрации:</b> {getdate(user.regDate)}</p>
                        <p><b>Статус:</b> {user.isAdmin ? 'Админ' : 'Читатель'}</p>
                        <div className="profile_about">
                            <p><b>О себе:</b></p>
                            <p className="about_text">{user.about}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    renderProfileEdit = () => {

    };

    render() {
        return (
            <div>
                { this.state.isEdit ? this.renderProfileEdit() : this.renderProfileInfo() }
            </div>
        )

    }
}

export default Profile;