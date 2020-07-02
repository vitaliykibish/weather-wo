import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from './App';
import store from './store';

import 'normalize.css';
import './global.css';

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/zeist" />
				</Route>
				<Route path="/:cityName?" component={App} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'),
);
