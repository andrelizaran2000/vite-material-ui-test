// Modules
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

// Actions
import { userActions, snackbarActions } from '../store/actions/index'

export default function useBindActions() {
  const dispatch = useDispatch();
  const userBindActions = bindActionCreators(userActions, dispatch);
  const snackbarBindActions = bindActionCreators(snackbarActions, dispatch);
  return {
    userBindActions,
    snackbarBindActions
  }
}
