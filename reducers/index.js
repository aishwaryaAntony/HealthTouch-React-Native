import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

/** It combines all reducers passed into a single reducing function which will be exported as default*/
const allReducers = combineReducers({
    loginReducer
    
});

export default rootReducer = (state, action) => {
    if (action.type === "INITIAL_STATE") {
        state = undefined;
    }
    return allReducers(state, action);
};
