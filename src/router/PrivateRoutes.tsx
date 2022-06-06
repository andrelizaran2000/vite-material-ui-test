// Modules
import {  } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  isLoggedIn:boolean
  children:JSX.Element
}

export default function ProtectedRoute ({ isLoggedIn, children }:Props) {
  if (!isLoggedIn) return <Navigate to="/login" replace />
  return children;
};