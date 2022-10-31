import {Navigate, Outlet} from 'react-router';
import React from 'react'
import LoginForm from '../Pages/LoginForm';

const useAuth = () => {
    const user = {loggedIn: true};
    return user && user.loggedIn;
};


const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth? <Outlet /> : <LoginForm />
}

export default ProtectedRoutes