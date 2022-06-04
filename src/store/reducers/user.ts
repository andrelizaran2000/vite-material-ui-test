// Types
import { Actions, ActionTypes, UserType } from '../types/user';

const initialState:UserType | null = null;

export default function reducer (state:UserType | null = initialState, { type, payload }:Actions):UserType | null {
  switch (type) {
    case ActionTypes.SIGN_IN_USER:
      return payload;
    case ActionTypes.SIGN_OUT_USER:
      return payload
    case ActionTypes.UPDATE_USER_PROFILE_PIC:
      return {
        ...state!,
        profilePic:payload
      }
    default:
      return state;
  }
}