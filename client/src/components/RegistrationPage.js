import React from 'react';
import { connect } from 'react-redux';
import {registerNewUser} from '../actions'

class RegistrationPage extends React.Component {

render(){
	return(
		<div>
			<form onSubmit={(event) => {
					event.preventDefault()

					const username = event.target.username.value
					const password = event.target.password.value
					const email = event.target.email.value

					this.props.dispatch(registerNewUser(username, password, email))
			}
		}>
				<label>username</label>
				<input type="text" name="username"/>
				<br></br>
				<label>password</label>
				<input type="text" name="password" />
				<br></br>
				<label>email</label>
				<input type="email" name="email" />
				<button type="submit">Submit</button>
			</form>
		</div>
		)
	}
}


export default connect()(RegistrationPage);
