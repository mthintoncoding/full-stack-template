const initialState = {
	isLoggedIn: false,
	user: {},
	users: []
}

const clientManager = (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE_STATE':
			return {
				...state,
				user: action.user,
				isLoggedIn: true
			};
			break;

			case 'LOGOUT_STATE':
				return{
				...state,
				user: {},
				isLoggedIn: false
			};
				break;

			case 'RETRIEVED_USERS':
				return {
					...state,
						users: action.users
				}

		default:
			return state
	}
}

export default clientManager
