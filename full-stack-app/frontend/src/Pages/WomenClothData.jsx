import React from "react";
import style from "./womencloth.module.css"
import Filter from "../Components/Filter";
import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useSearchParams,useLocation, Link} from "react-router-dom";
import {getClothData} from "../Redux/AppReducer/action";
import "../App.css"
import ClothCard from "../Components/ClothCard";
const WomenClothData = () => {

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const clothdata = useSelector((store)=>store.AppReducer.cloths);
  const location = useLocation();

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
      <div style={{padding:"50px", margin:"auto"}}>
        <img src="./images" alt="" height="400px" width="100%"/>
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
          <button className={style.btn}>ADD</button>
         </div>
          )
        
        }
        
      </div>
    </div>
    </div>
  );
};

export {WomenClothData};
