import React from 'react';
import { Route, Router} from 'react-router-dom';

import history from '../history';

import HomeContainer from './HomeContainer';
import HeaderContainer from './HeaderContainer';
import NewsContainer from './NewsContainer';
import ProfileContainer from './ProfileContainer';
import LoginContainer from './LoginContainer';
import RegistrationsContainer from './RegistrationsContainer';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<HeaderContainer />

				<Route exact path="/" component={HomeContainer} />
				<Route exact path="/news" component={NewsContainer} />
				<Route exact path="/profile" component={ProfileContainer} />
				<Route exact path="/login" component={LoginContainer} />
				<Route exact path="/registration" component={RegistrationsContainer} />
			</Router>
		);
	}
}

export default App;