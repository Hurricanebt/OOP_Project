import React from 'react';

import { getdate } from '../utils/getdate';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            about: '',
            regDate: '',
            imageURL: '',
            isAdmin: false
        }
    }

    componentWillMount() {
        fetch(`http://localhost:4000/api/getuserbyid?id=${this.props.id}`, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            method: 'GET'
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                firstName: data.firstName,
                lastName: data.lastName,
                about: data.about,
                regDate: data.regDate,
                imageURL: data.imageURL,
                isAdmin: data.isAdmin
            })
        });
    }

    render() {
        const { firstName, lastName, about, regDate, imageURL, isAdmin } = this.state;
        return (
            <div id="profile" className="container">
                <div className="profile_header">
                    <h2>{`${lastName} ${firstName}`}</h2>
                </div>
                <div className="profile_main">
                    <div className="profile_left-bar">
                        <img src={imageURL} alt=""/>
                    </div>
                    <div className="profile_personal-info">
                        <div>
                            <b>Фамилия:</b> {lastName}
                        </div>
                        <div>
                            <b>Имя:</b> {firstName}
                        </div>
                        <div>
                            <b>Дата регистрации:</b> {getdate(regDate)}
                        </div>
                        <div>
                            <b>Статус:</b> {isAdmin ? 'Админ' : 'Читатель'}
                        </div>
                        <div className="profile_about">
                            <p><b>О себе:</b></p>
                            <p className="about_text">{about}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPage;