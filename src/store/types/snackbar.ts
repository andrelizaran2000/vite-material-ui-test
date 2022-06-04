export type SnackbarType = {
  title:string,
  message:string,
  type:string
}

export enum SnackbarActionTypes {
  SHOW_SNACKBAR = 'SHOW_SNACKBAR',
  HIDE_SNACKBAR = 'HIDE_SNACKBAR'
}

export type SnackbarActions = ShowSnackbar | HideSnackbar;

export type ShowSnackbar = {
  type:SnackbarActionTypes.SHOW_SNACKBAR,  
  payload:SnackbarType
}

export type HideSnackbar = {
  type:SnackbarActionTypes.HIDE_SNACKBAR,
  payload:null
}