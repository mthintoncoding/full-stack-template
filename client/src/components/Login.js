import React from 'react';
import {loginNewUser} from '../actions'
import {logoutUser} from '../actions'
import RegistrationPage from './RegistrationPage'
import { connect } from 'react-redux'

class Login extends React.Component {

	render() {
		return(
			<div className='loginContainer'>
			<div className='loginForm'>
		<form onSubmit={(event) => {
			event.preventDefault()

			const username = event.target.username.value
			const password = event.target.password.value

			this.props.dispatch(loginNewUser(username, password))

		}}>
				<label>username</label>
				<input type="text" name="username" />
				<br></br>
				<label>password</label>
				<input type="text" name="password" />
				<br></br>
				<button type="submit">Login</button>
			</form>
				<button type="submit" onClick={(event) => this.props.dispatch(logoutUser())}>Logout</button>
			<p>Don't have an account, set one up here</p>
			<RegistrationPage/>
			</div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
	return {
		loggedIn: state.clientManager.isLoggedIn
	}
}
export default connect(mapStateToProps)(Login);
