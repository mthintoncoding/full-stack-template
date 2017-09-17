import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login'
import RegistrationPage from './components/RegistrationPage'
import Navbar from './components/Navbar'
import About from './components/About'
import UserGreeting from './components/UserGreeting'
import News from './components/News'
import Services from './components/Services'
import Contact from './components/Contact'
import UserView from './components/UserView'
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
	<Provider store={store}>
	<Router history={ browserHistory }>
  		<Route path='/' component={Navbar} >
  			<IndexRoute component={App} />
				<Route path='/about' component={About} />
				<Route path='/login' component={Login} />
  			<Route path='/registration' component={RegistrationPage} />
				<Route path='/news' component={News} />
				<Route path='/services' component={Services} />
				<Route path='/contact' component={Contact} />
				<Route path='/usergreeting' component={UserGreeting} />
				<Route path='/userView' component={UserView} />
			</Route>
  	</Router>
  	</Provider>,
  document.getElementById('root')
);
