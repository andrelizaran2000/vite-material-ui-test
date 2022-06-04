// Modules
import { Dispatch } from 'redux';

// Types
import { 
  SnackbarActions, 
  SnackbarActionTypes, 
  SnackbarType 
} from '../types/snackbar';

export function showSnackbar (payload:SnackbarType) {
  return (dispatch:Dispatch<SnackbarActions>) => {
    dispatch({
      type:SnackbarActionTypes.SHOW_SNACKBAR,
      payload
    })
  }
}

export function hideSnackbar () {
  return (dispatch:Dispatch<SnackbarActions>) => {
    dispatch({
      type:SnackbarActionTypes.HIDE_SNACKBAR,
      payload:null
    })
  }
}