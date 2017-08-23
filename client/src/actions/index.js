import $ from 'jquery';
import {browserHistory} from 'react-router';

export const UPDATE_STATE = 'UPDATE_STATE';
export const updateState = (user) => ({
	type: UPDATE_STATE,
	user
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
				alert("No dice!")
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
				browserHistory.push('/')
				console.log(response)
			}
		})
	}
}
