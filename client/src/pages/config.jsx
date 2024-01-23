import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "./dashboard";
import Donate from "./donate"
import AllNews from "./allnews";
import ChooseOption from "./chooseoption";
import Roles from "./roles";
import Profile from "./profile";
import Login from "./auth/login";
import Auth from "./auth";
import Register from "./auth/register";
import PleaseVerify from "./pleaseverify";
import Verify from "./verify";
import Err404 from "./404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/news/all",
    element: <AllNews />,
  },
  {
    path: "/choose/option",
    element: <ChooseOption />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/please-verify",    
    element: <PleaseVerify />,      
  },
  {
    path: "/verify/:emailtoken",    
    element: <Verify />,      
  },
  {
    path: "/*",
    element: <Err404 />,
  },
]);
