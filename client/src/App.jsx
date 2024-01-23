import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useEffect, useContext } from "react";
import { router } from "./pages/config";
import { UserContext } from "./contexts/UserContext";
import { loadUser } from "./actions/auth";

function App() {

    const { setUser } = useContext(UserContext)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            loadUser().then(data => { if(data) setUser(data)}).catch(err => console.error(err))
        }        
    }, [])

    return (
        <div className="App">            
            <RouterProvider router={router} />            
        </div>
    );
}

export default App;
