import {combineReducers} from 'redux';
import clientManager from './clientManager';
import appointmentManager from './appointmentManager';

const rootReducer = combineReducers ({
	clientManager,
	appointmentManager
	})

export default rootReducer
