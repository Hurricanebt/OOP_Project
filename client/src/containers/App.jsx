import React from 'react';
import { Route, Router, Switch} from 'react-router-dom';

import history from '../history';

import HomeContainer from './HomeContainer';
import HeaderContainer from './HeaderContainer';
import NewsContainer from './NewsContainer';
import NewsListContainer from './NewsListContainer';
import ProfileContainer from './ProfileContainer';
import LoginContainer from './LoginContainer';
import RegistrationsContainer from './RegistrationsContainer';
import UserPageContainer from './UserPageContainer';

class App extends React.Component {
	render() {
		return (
			<Router history={history}>
				<HeaderContainer />
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route exact path="/news" component={NewsListContainer} />
					<Route exact path="/news:id" component={NewsContainer} />
					<Route exact path="/profile" component={ProfileContainer} />
					<Route exact path="/user:id" component={UserPageContainer} />
					<Route exact path="/login" component={LoginContainer} />
					<Route exact path="/registration" component={RegistrationsContainer} />
				</Switch>
			</Router>
		);
	}
}

export default App;