import React from "react";
import style from "./womencloth.module.css"
import Filter from "../Components/Filter";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useSearchParams,useLocation, Link} from "react-router-dom";

import {useState} from "react";
import {getCartData, getcartFailure, getcartRequest, getcartSuccesss, getClothData} from "../Redux/AppReducer/action";
import "../App.css"
import ClothCard from "../Components/ClothCard";
import axios from "axios";
const WomenClothData = () => {
  const [page, setPage] = useState(1)
  //const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const clothdata = useSelector((store)=>store.AppReducer.cloths);

  const clothlength = useSelector((store)=>store.AppReducer.datalength);
  const location = useLocation();

  const auth = useSelector((state) => state.AuthReducer.token);

  // const auth = useSelector((state) => state.AuthReducer.token);

  const cartData = useSelector((state) => state.AppReducer.cartData);

console.log("cartdata",cartData)
console.log("womenAuth",auth)

  const cartKey = useSelector((state) => state.AppReducer.cartKey);

  console.log("cartkey",cartKey)

const handleaddtoCart = (id,data)=>{
  axios.post(`https://gleaming-suspenders-bass.cyclic.app/cart/${id}`,{
    products: [
      {
        product_id: data,
        quantity: 1
      },
    ],
  },
  {
    headers: {
      authorization: auth,

    }
    
  }
  
  )
  .then((r)=>{
    console.log("cartpostdt",r)
    alert("Item is added successfully")
  })
  .catch((er)=>{
    console.log("carterr",er)
  })
}
const [searchParams,setSearchParams] = useSearchParams();

useEffect(()=>{
  dispatch(getCartData(auth))
},[])

  useEffect(() =>{
    const params = {}
    page && (params.page = page)
    
   setSearchParams(params)

    if(location || clothdata.length === 0){
      const category = searchParams.getAll('color') 
      const queryParam = { 
        params: { 
          color: category, 
          page: page  
        }
      }
      dispatch(getClothData(queryParam))
    }
    

    console.log("page",page)

  },[location.search,page])

  return (
    <div>
      <div className={style.topimg} >
        <img src="https://github.com/Priyankadubey190/full-crud-application/raw/main/full-stack-app/frontend/public/images/women-img1.jpg" alt="" height="400px" width="100%"/>
      </div>
    <div style={{display: 'flex'}}>
      <div className={style.filter}>
      <Filter />
      </div>
      <div className={style.myclass}>
        {/* Map through the watch list here using WatchCard Component */}
        
        {
         
          clothdata.length > 0 && 
          clothdata.map((el)=>
          <div className={style.childcon}>
          <Link key={el.id} to={`/prodectdetails/${el._id}`} style={{textDecoration:"none"}}> <ClothCard id={el.id} img={el.image} price={el.price} review={el.review}/> </Link>
          <button className={style.btn} onClick={()=>handleaddtoCart(cartKey,el._id)}>ADD</button>
         </div>
          )
        
        }
        
        
      </div>
    </div>
    <div className={style.mybtn}>
        <button className={style.btn} onClick={()=>{if(page>1){setPage(page-1)}}}>Previous</button><button className={style.btn} onClick={()=>{if(page<clothlength){setPage(page+1)}}}>Next</button>
        </div>
    </div>
  );
};

export {WomenClothData};
