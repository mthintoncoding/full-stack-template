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
			}

		default:
			return state
	}
}

export default clientManager
