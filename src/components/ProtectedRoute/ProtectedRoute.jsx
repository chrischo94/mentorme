import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../utils/auth/';

const ProtectedRoute = ({ onLoginFail = "/login", ...rest }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        <Route {...rest} />
    ) : (
        <Navigate to={onLoginFail} />
    );
};

export default ProtectedRoute;