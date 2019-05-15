import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        });
    };

    handleClick = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password, this.props.history);
        this.setState({email: '', password: ''});
    };

    render() {
        const error = this.props.error;

        return (
            <div id="login-form" className="container">
                <div className="login-form_header">
                    <h2>Вход в систему</h2>
                </div>
                <div className="login-form_inputs">
                    <form autoComplete= "off">
                        <input
                            className={ error.invalidEmail ? "error" : null }
                            type="text"
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
                        <input className="login-form_button" type="submit" onClick={this.handleClick} value="Войти"/>
                    </form>
                    <Link to={'/registration'}>Зарегистрироваться</Link>
                </div>
                <div className="login-form_errors">
                    { error.userNotFound }
                    
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        this.props.refresh();
    };
}

export default Login;