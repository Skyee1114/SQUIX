import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "../src/pages/dashboard";
import Donate from "../src/pages/donate";
import AllNews from "../src/pages/allnews";
import ChooseOption from "../src/pages/chooseoption";
import Roles from "../src/pages/roles";
import Profile from "../src/pages/profile";
import Login from "../src/pages/auth/login";
import Auth from "../src/pages/auth";
import Register from "../src/pages/auth/register";
import PleaseVerify from "../src/pages/pleaseverify";
import Verify from "../src/pages/verify";
import Err404 from "../src/pages/404";
import StripePayment from "../src/pages/stripepayment";
import AdminPanel from "../src/pages/adminpanel";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { UserContext } from "./contexts/UserContext";
import PrivateRoute from "./pages/PrivateRoute";
import AdminRoute from "./pages/AdminRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
    const { user, setUser } = useContext(UserContext);
    const [ loading, setLoading ] = useState(false)

    // console.log(user);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            loadUser()
                .then((data) => {
                    setLoading(true);
                    if (data) setUser(data);
                })
                .catch((err) => console.error(err));
        }
        else {
            setLoading(true);
        }
    }, []);

    return (
        <div className="App">
        
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/news/all" element={<AllNews />} />
                    <Route path="/choose/option" element={<ChooseOption />} />
                    <Route path="/roles" element={<Roles />} />                
                    <Route path="/auth" element={<Auth />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="/please-verify" element={<PleaseVerify />} />
                    <Route path="/verify/:emailtoken" element={<Verify />} />
                    <Route path="/profile" element={ loading ? <PrivateRoute element={<Profile />} /> : null} />
                    <Route path="/stripe" element={ loading ? <PrivateRoute element={<StripePayment />} /> : null} />
                    <Route path="/admin" element={ loading ? <AdminRoute element={<AdminPanel />} /> : null} />
                    <Route path="/*" element={<Err404 />} />
                </Routes>
            </Router>        
        </div>
    );
}

export default App;
