// Modules
import { ReactNode } from 'react';
import { Snackbar } from '@mui/material';

// Types
import useBindActions from '../hooks/useBindActions';

// Hooks
import useSelectors from '../hooks/useSelectors';

type Props = {
  children:ReactNode
}

export default function UiContainer({ children }:Props) {

  const { snackbarBindActions } = useBindActions();
  const { hideSnackbar } = snackbarBindActions;
  const { snackbar } = useSelectors()
  const { title } = snackbar;

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
