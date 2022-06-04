export type UserType = {
  displayName:string;
  enterprise:string;
  profilePic:string;
  userType:string;
}

export enum ActionTypes {
  SIGN_IN_USER = 'SIGN_IN_USER',
  SIGN_OUT_USER = 'SIGN_OUT_USER',
  UPDATE_USER_PROFILE_PIC = "UPDATE_USER_PROFILE_PIC",
}

export type Actions = SignInUser | SignOut | UpdateUserProfilePic;

export type SignInUser = {
  type:ActionTypes.SIGN_IN_USER,
  payload:UserType
}

export type SignOut = {
  type:ActionTypes.SIGN_OUT_USER,
  payload:null
}

export type UpdateUserProfilePic = {
  type:ActionTypes.UPDATE_USER_PROFILE_PIC,
  payload:string
}

