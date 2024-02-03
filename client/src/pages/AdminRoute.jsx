import React, { useContext } from "react";
import { Navigate } from 'react-router-dom';
import { UserContext } from "../contexts/UserContext";

const AdminRoute = ({ element: Element }) => {

    const { user } = useContext(UserContext);
    if (user && user.isAdmin) {
        return Element
    }
    return <Navigate to="/404" />
}

AdminRoute.displayName = 'AdminRoute'

export default AdminRoute
