//Create the HOC for protected Routes
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";


const ReqAuth = ({children}) => {

    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
    const location = useLocation(); 
    if (!isAuth) {
      //console.log("isAuth", isAuth);
     return( <Navigate
        to="/login"
        state={{from: location.pathname}} replace={true}
      />
     )
  }
  return children;
};

export default ReqAuth;
