import React from "react";
import style from "./womencloth.module.css"
import Filter from "../Components/Filter";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useSearchParams,useLocation, Link} from "react-router-dom";
import {getCartData, getcartFailure, getcartRequest, getcartSuccesss, getClothData} from "../Redux/AppReducer/action";
import "../App.css"
import ClothCard from "../Components/ClothCard";
import axios from "axios";
const WomenClothData = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const clothdata = useSelector((store)=>store.AppReducer.cloths);
  const location = useLocation();

  const auth = useSelector((state) => state.AuthReducer.token);

  const cartData = useSelector((state) => state.AppReducer.cartData);

console.log("cartdata",cartData)
console.log("cAuth",auth)

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

// const getCartData = ()=>{
//   dispatch(getcartRequest);
//   return axios
//   .get(`https://gleaming-suspenders-bass.cyclic.app/cart`,
//   {
//     headers: {
//       authorization: auth,
//     },
//   })
//   .then((r)=>{
//       let dt = r.data.productarr  
    
//       console.log("cartData",r.data);
//       console.log("keyCart",r.data.cartkey)
//       dispatch(getcartSuccesss(r.data.cartkey));
      
//       //console.log("cdt",data)
//   })
//   .catch((e)=>{
//       dispatch(getcartFailure)
//   });
// }

useEffect(()=>{
  dispatch(getCartData(auth))
},[])

  useEffect(() =>{
    if(location || clothdata.length === 0){
      const category = searchParams.getAll('color') 
      const queryParam = { 
        params: { 
          color: category, 

        }
      }
      dispatch(getClothData(queryParam))
    }
  },[location.search])

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
    </div>
  );
};

export {WomenClothData};
