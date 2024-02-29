import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Donate from "./pages/donate";
import AllNews from "./pages/allnews";
import ChooseOption from "./pages/chooseoption";
import Roles from "./pages/roles";
import Profile from "./pages/profile";
import Login from "./pages/auth/login";
import Auth from "./pages/auth";
import Register from "./pages/auth/register";
import PleaseVerify from "./pages/pleaseverify";
import Verify from "./pages/verify";
import Err404 from "./pages/404";
import StripePayment from "./pages/stripepayment";
import Admin from "./pages/admin";
import News from "./pages/admin/news";
import NewsEdit from "./pages/admin/newsedit";
import JobsEdit from "./pages/admin/jobsedit";
import Job from "./pages/admin/job";
import Subscribers from "./pages/admin/subscribers";
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
                    <Route path="/news/:id" element={<ChooseOption />} />
                    <Route path="/roles/:id" element={<Roles />} />                
                    <Route path="/auth" element={<Auth />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                    <Route path="/please-verify" element={<PleaseVerify />} />
                    <Route path="/verify/:emailtoken" element={<Verify />} />
                    <Route path="/profile" element={ loading ? <PrivateRoute element={<Profile />} /> : null} />
                    <Route path="/stripe" element={ loading ? <PrivateRoute element={<StripePayment />} /> : null} />
                    <Route path="/admin" element={ loading ? <AdminRoute element={<Admin />} /> : null} />
                    <Route path="/admin/news" element={ loading ? <AdminRoute element={<News />} /> : null} />
                    <Route path="/admin/news/edit" element={ loading ? <AdminRoute element={<NewsEdit />} /> : null} />
                    <Route path="/admin/jobpost" element={ loading ? <AdminRoute element={<Job />} /> : null} />
                    <Route path="/admin/jobs/edit" element={ loading ? <AdminRoute element={<JobsEdit />} /> : null} />
                    <Route path="/admin/subscribers" element={ loading ? <AdminRoute element={<Subscribers />} /> : null} />
                    
                    <Route path="/*" element={<Err404 />} />
                </Routes>
            </Router>        
        </div>
    );
}

export default App;
