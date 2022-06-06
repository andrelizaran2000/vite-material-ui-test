// Modules
import { Navigate } from 'react-router-dom';

type Props = {
  isLoggedIn:boolean
  children:JSX.Element
}

export default function PublicRoutes ({ isLoggedIn, children }:Props) {
  if (isLoggedIn) return <Navigate to="/product-form" replace/>;
  return children;
};