import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    renderLoginButton = () => {
        return (
            <div className="header_button">
                <Link to={'/login'}>Войти</Link>
            </div>
        )
    };

    renderLogoutButton = () => {
        return (
            <div className="header_button" onClick={this.props.logout}>
                <Link to={'/login'}>Выйти</Link>
            </div>
        )
    };

    render() {
        return (
            <div id="header">
                <div className="header_nav-menu">
                    <nav>
                        <ul>
                            <li><Link to={'/'}>Главная</Link></li>
                            <li><Link to={'/news'}>Новости</Link></li>
                            <li><Link to={'/profile'}>Профиль</Link></li>
                        </ul>
                    </nav>
                </div>
                { this.props.isLogin ? this.renderLogoutButton() : this.renderLoginButton() }
            </div>
        );
    }
}

export default Header;