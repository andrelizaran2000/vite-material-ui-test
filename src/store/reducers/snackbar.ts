// Types
import { SnackbarActions, SnackbarActionTypes, SnackbarType } from '../types/snackbar';

const initialState:SnackbarType = {
  message:'',
  title:'',
  type:''
}

export default function snackbarReducer (state:SnackbarType = initialState, action:SnackbarActions):SnackbarType {
  const { type, payload } = action;
  switch (type) {
    case SnackbarActionTypes.SHOW_SNACKBAR:
      return payload;
    case SnackbarActionTypes.HIDE_SNACKBAR:
      return initialState;
    default: return state
  }
}