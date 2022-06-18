import { LOGIN_SUCCESS, LOG_OUT } from '../actions/actionTypes'

/** Set default value to initial state */
const initialState = {
	isLoginSuccess: false,
	
};

/**
 * This function is used to update the state by pushing an action into the initial state
 * @param {object} state 
 * @param {object} action 
 * @returns 
 */
export default function (state = initialState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,				
				isLoginSuccess: true,
			};
		  case LOG_OUT:
			  return{
				  ...state,
				  isLoginSuccess:false
			  }	
		
		  default:
			return state;
	}
}

