const initialState = {
	isLoggedIn: false,
	user: {}
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
			}

		default:
			return state
	}
}

export default clientManager
