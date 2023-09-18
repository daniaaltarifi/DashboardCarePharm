import React from "react";
import { Routes,Route, Navigate,useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from './routes.js'
import { useEffect } from "react";
 import Dashboard from "./layouts/dashboard";

const ProtectRoute = ({...props}) => {
 
      const { userInfo } = useSelector((state) => state.auth);
    const navigate=useNavigate()
      if (userInfo) {
        return navigate('/dashboard')
      } else {
        return <Navigate to="/authentication/sign-in" />;
      }
    };
    
    

export default ProtectRoute;
