//Write the ActionCreator functions here
import * as types from "./actionType";
import axios from "axios";


const getClothDataRequest = ()=>{
    return{
        type: types.GET_CLOTHS_DATA_REQUEST
    }
} 

const getClothData = (queryParam)=> (dispatch)=>{
    dispatch(getClothDataRequest);
    return axios
    .get(`https://gleaming-suspenders-bass.cyclic.app/womendata`,queryParam)
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

const getcartRequest = ()=>{
    return{
        type: types.GET_CARTKEY_REQUEST
    }
}

const getcartSuccesss = (payload)=>{
    return{
        type: types.GET_CARTKEY_SUCCESS,
        payload
    }
}

const getcartFailure = ()=>{
    return{
        type: types.GET_CARTKEY_FAILURE
    }
}

const getCartData = (auth)=>(dispatch)=>{
    console.log("redux")
    dispatch(getcartRequest);
    dispatch({type: types.GET_CARTDATA_REQUEST})
    return axios
    .get(`https://gleaming-suspenders-bass.cyclic.app/cart`, {
              headers: {
                authorization: auth,
              },
            })
    .then((r)=>{


        console.log("rdata",r.data.productarr)

        dispatch({type: types.GET_CARTDATA_SUCCESS,
            payload: r.data.productarr })

            dispatch(getcartSuccesss(r.data.cartkey)) 
        
       

        console.log("clothData",r);
    })
    .catch((e)=>{
        dispatch(getcartFailure)
        dispatch({type: types.GET_CARTDATA_FAILURE})
    });
}


export {getClothData,getcartRequest,getcartSuccesss,getcartFailure,getCartData};