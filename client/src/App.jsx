import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/config";
import {UserContextProvider} from "./contexts/UserContext"

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <RouterProvider router={router} />
            </UserContextProvider>
        </div>
    );
}

export default App;
