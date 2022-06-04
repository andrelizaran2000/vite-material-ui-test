// Modules
import { combineReducers } from'redux';

// Reducers
import userReducer from './user';
import snackbarReducer from './snackbar';

const reducersCombined = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer
})

export default reducersCombined;