//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const login = (payload) => (dispatch)=>{
    dispatch({type : types.LOGIN_REQUEST});

    return axios ({
        method: "post", 
        baseURL:"https://gleaming-suspenders-bass.cyclic.app/login",
        data:payload,
    })
    .then((r)=>{
        console.log("logauth",r.data.token)
        dispatch({type : types.LOGIN_SUCCESS, payload: `Bearer ${r.data.token}`})
        console.log("Again Login success")
    })
    .catch((e)=> dispatch({type : types.LOGIN_FAILURE}));
};

