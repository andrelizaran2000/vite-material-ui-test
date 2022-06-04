// Modules
import { ReactNode } from 'react';
import { Snackbar } from '@mui/material';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { snackbarActions } from '../store/actions/index'

// Types
import { State } from '../store/store';

type Props = {
  children:ReactNode
}

export default function UiContainer({ children }:Props) {

  const dispatch = useDispatch();
  const { title } = useSelector((state:State) => state.snackbar)
  const { hideSnackbar} = bindActionCreators(snackbarActions, dispatch);

  return (
    <>
      { children }
      <Snackbar
        open={title.length > 0}
        autoHideDuration={6000}
        onClose={() => hideSnackbar()}
        message={title}
      />
    </>
  )
}
