//Write the ActionCreator functions here
import * as types from "./actionType";
import asios from "axios";

const getClothDataRequest = ()=>{
    return{
        type: types.GET_CLOTHS_DATA_REQUEST
    }
} 

const getClothData = (queryParam)=> (dispatch)=>{
    dispatch(getClothDataRequest);
    return asios
    .get(`http://localhost:8080/womendata`,queryParam)
    .then((r)=>{
        dispatch({
            type: types.GET_CLOTHS_DATA_SUCCESS,
            payload: r.data
        })
        console.log("clothData",r);
    })
    .catch((e)=>{
        dispatch({
            type: types.GET_CLOTHS_DATA_FAILURE
        })
    });
}

export {getClothData};