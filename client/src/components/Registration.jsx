import React from 'react';
import { Link } from "react-router-dom";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            imageURL: '',
            email: '',
            password: '',
        }
    };

    componentWillMount() {
        this.props.refresh();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleClick = e => {
        e.preventDefault();
        const { firstName, lastName, imageURL, email, password } = this.state;
        this.props.registration(lastName, firstName, email, password, imageURL);
        this.setState({firstName: '', lastName: '', imageURL: '', email: '', password: ''});
    };

    render() {
        const error = this.props.error;

        return (
            <div id="reg-form" className="container">
                <div className="reg-form_header">
                    <h2>Регистрация в системе</h2>
                </div>
                <div className="reg-form_inputs">
                    <form autoComplete= "off">
                        <input
                            className={ error.invalidLastName ? "error" : null }
                            type="text"
                            placeholder="Фамилия"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                        <span className="error">{ error.invalidLastName }</span>
                        <input
                            className={ error.invalidFirstName ? "error" : null }
                            type="text"
                            placeholder="Имя"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <span className="error">{ error.invalidFirstName }</span>
                        <input
                            className={ error.invalidEmail ? "error" : null }
                            type="email"
                            placeholder="Электронная почта"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <span className="error">{ error.invalidEmail }</span>
                        <input
                            className={ error.invalidPassword ? "error" : null }
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <span className="error">{ error.invalidPassword }</span>
                        <input
                            type="text"
                            placeholder="Ссылка на фото"
                            name="imageURL"
                            value={this.state.imageURL}
                            onChange={this.handleChange}
                        />
                        <input className="reg-form_button" type="submit" value="Зарегистрироваться" onClick={this.handleClick} />
                    </form>
                    У меня уже есть аккаунт. <Link to={'/login'}>Войти</Link>
                </div>
                <div className="reg-form_errors">
                    { error.userAlreadyReg }
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.refresh();
    };
}

export default Registration;