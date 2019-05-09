import React from 'react';


import { getdate } from '../utils/getdate';
import history from '../history';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: props.user.lastName,
            firstName: props.user.firstName,
            about: props.user.about,
            imageURL: props.user.imageURL,
            isEdit: false
        }
    }

    componentWillMount() {
        if (this.props.user.isLogin === false) history.push('/login');
        this.props.refresh();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleEditButton = () => {
        this.setState({isEdit: true})
    };

    handleSaveButton = () => {
        const data = this.state;
        const user = this.props.user;
        this.props.editProfile(data.lastName, data.firstName, data.about, data.imageURL, user.userID);
        if (data.lastName !== '' && data.firstName !== '' && data.imageURL !== '') {
            this.setState({isEdit: false});
            this.props.refresh();
        }
    };

    handleCancelButton = () => {
        const user = this.props.user;
        this.setState({
            lastName: user.lastName,
            firstName: user.firstName,
            about: user.about,
            imageURL: user.imageURL,
            isEdit: false});
        this.props.refresh();
    };

    renderProfileInfo = () => {
        const { user } = this.props;

        return (
            <div id="profile">
                <div className="profile_header">
                    <h2>{`${user.lastName} ${user.firstName}`}</h2>
                </div>
                <div className="profile_main">
                    <div className="profile_left-bar">
                        <img src={user.imageURL} alt=""/>
                        <div className="profile_button" onClick={this.handleEditButton}>Редактировать</div>

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
        const { user } = this.props;

        return (
            <div id="profile">
                <div className="profile_header">
                    <h2>{`${user.lastName} ${user.firstName}`}</h2>
                </div>
                <div className="profile_main">
                    <div className="profile_left-bar">
                        <div>
                            <img src={user.imageURL} alt=""/>
                            <input
                                className={ user.error.invalidLastName ? "error photo-link" : "photo-link" }
                                type="text"
                                name="imageURL"
                                value={this.state.imageURL}
                                onChange={this.handleChange}
                            />
                            <span className="error">{ user.error.invalidImageURL }</span>
                        </div>
                        <div className="profile_edit-buttons">
                            <div className="profile_button" onClick={this.handleSaveButton}>Сохранить</div>
                            <div className="profile_button cancel" onClick={this.handleCancelButton}>Отмена</div>
                        </div>
                    </div>
                    <div className="profile_personal-info">
                        <p>
                            <b>Фамилия: </b>
                            <input
                                className={ user.error.invalidLastName ? "error" : null }
                                type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                            <span className="error">{ user.error.invalidLastName }</span>
                        </p>
                        <p>
                            <b>Имя: </b>
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </p>
                        <p>
                            <b>Дата регистрации:</b> {getdate(user.regDate)}
                        </p>
                        <p>
                            <b>Статус:</b> {user.isAdmin ? 'Админ' : 'Читатель'}
                        </p>
                        <div className="profile_about">
                            <p><b>О себе:</b></p>
                            <textarea name="about" value={this.state.about} onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div>
                { this.state.isEdit ? this.renderProfileEdit() : this.renderProfileInfo() }
            </div>
        )
    }

    componentWillUnmount() {
        this.props.refresh();
    };
}

export default Profile;