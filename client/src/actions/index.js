import $ from 'jquery';
import {browserHistory} from 'react-router';

export const UPDATE_STATE = 'UPDATE_STATE';
export const updateState = (user) => ({
	type: UPDATE_STATE,
	user
})

export const LOGOUT_STATE = 'LOGOUT_STATE';
export const logoutState = () => ({
	type: LOGOUT_STATE,
})

export const registerNewUser = (username, password, email) => {
	return (dispatch) => {
		$.ajax({
				type: 'POST',
				url: 'http://localhost:8080/api/createaccount',
				data: {username, password, email},
				success: function(user) {
					console.log(user);
				}
		})
	}
}

const retrievedUsers = (users) => ({
	type: 'RETRIEVED_USERS',
	users
})

export const retrieveUsers = () => {
	return (dispatch) => {
		$.ajax({
			type: 'GET',
			url: "http://localhost:8080/api/retrieveUsers",
			success: function(res) {
				dispatch(retrievedUsers(res.users))
			}
		})
	}
}

export const loginNewUser = (username, password) => {
	return (dispatch) => {
		var settings = {
			url: "http://localhost:8080/api/login",
			method: "GET",
			headers: {
				'content-type': "application/json",
				authorization: "Basic " + btoa(username + ':' + password)
			}
		};
		$.ajax(settings).done(function (response) {
			if(response){
				dispatch(updateState(response.user))
				browserHistory.push('/usergreeting')
			}
			else {
				alert("Unauthorized User!")
			}
		})
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:8080/api/logout',
			success:  function(response) {
				dispatch(logoutState())
				browserHistory.push('/')
				console.log(response)
			}
		})
	}
}
