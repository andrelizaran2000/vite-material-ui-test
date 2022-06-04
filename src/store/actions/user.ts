// Modules
import { Dispatch } from 'redux';

// Types
import { Actions, ActionTypes, UserType } from '../types/user';

export function signInUser (payload:UserType) {
  return (dispatch:Dispatch<Actions>) => {
    dispatch({
      type:ActionTypes.SIGN_IN_USER,
      payload
    })
  }
}

export function signOutUser () {
  return (dispatch:Dispatch<Actions>) => {
    dispatch({
      type:ActionTypes.SIGN_OUT_USER,
      payload:null
    })
  }
}

export function updateUserProfilePic (payload:string) {
  return (dispatch:Dispatch<Actions>) => {
    dispatch({
      type:ActionTypes.UPDATE_USER_PROFILE_PIC,
      payload
    })
  }
}