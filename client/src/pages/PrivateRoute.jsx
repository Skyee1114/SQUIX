import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

const PrivateRoute = ({ element: Element }) => {

    const { user } = useContext(UserContext);
    if (user) {
        return Element
    }
    return <Navigate to="/404" />
}

PrivateRoute.displayName = 'PrivateRoute'

export default PrivateRoute
