//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const login = (payload) => (dispatch)=>{
    dispatch({type : types.LOGIN_REQUEST});

    return axios ({
        method: "post", 
        baseURL:"http://localhost:8080/login",
        data:payload,
    })
    .then((r)=>dispatch({type : types.LOGIN_SUCCESS, payload: r.data}))
    .catch((e)=> dispatch({type : types.LOGIN_FAILURE}));
};

