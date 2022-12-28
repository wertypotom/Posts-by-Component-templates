import React from 'react';
import { Navigate } from 'react-router-dom';
import './PrivateRoute.css';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={'/'} />;
};

export default PrivateRoute;
