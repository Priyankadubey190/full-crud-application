import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import { getCartData, getcartFailure, getcartRequest, getcartSuccesss } from "../Redux/AppReducer/action";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import style from "./cart.module.css";

export default function CartPage() {
 const dispatch = useDispatch()
const Navigate = useNavigate();

 const [data,setData] = useState([])
 const [tprice,setTprice] = useState(0)

    const auth = useSelector((state) => state.AuthReducer.token);

    const cartData = useSelector((state) => state.AppReducer.cartData);

    const cartKey = useSelector((state) => state.AppReducer.cartKey);

    console.log("data",cartData);

    const handleaddtoCartone = (id,data,qty)=>{
      axios.post(`https://gleaming-suspenders-bass.cyclic.app/cart/${id}`,{
        products: [
          {
            product_id: data,
            quantity: qty
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
      dispatch(getCartData(auth));
     
      })
      .then(()=>{
        handleSetPrice()
      })
      .catch((er)=>{
        console.log("carterr",er)
      })
    }
    
    /////

const handledelete = (id,data)=>{
  axios.delete(`https://gleaming-suspenders-bass.cyclic.app/cart/singledelete/${id}`,{
    headers: {
      authorization: auth,

    },
    data:{
      id:data
    }
    
  }
  
  )
  .then((r)=>{
    console.log("singledelcart",r)
    dispatch(getCartData(auth))

   // getCartData()
  })
  .then(()=>{
    handleSetPrice()
  })
  .catch((er)=>{
    console.log("singlecarterr",er)
  })
}

const handleSetPrice = ()=>{
  let tpr = 0
  cartData.forEach((el)=>{
    console.log("el",el.products)
     tpr = tpr+ Number(el.products.price)*Number(el.quantity)
  })

  console.log("tpr",tpr)
  setTprice(tpr)

}

    useEffect(()=>{
        
      dispatch(getCartData(auth));

    },[])

    useEffect(()=>{
      handleSetPrice()
    },[cartData])

    console.log("tpout",tprice)
    console.log("dataout",data)


  return (
    <div className={style.container}>
<div>
    {cartData.length > 0 && cartData.map((el,ind)=>{
      return(
        <div className={style.flex}>
            <div>
            <img src={el.products.image} alt="" className={style.imgclass} />
            </div>
            <div className={style.childcon}> 
                <div>
                <div>Color <b>: {el.products.color}</b></div>
                <br />
                <div>Review <b>: {el.products.review}</b></div><br />
                <div>Price <b>: ${el.products.price}</b></div>
                </div>
               
            </div>
            <div className={style.childcon}>
                <button className={style.btn} onClick={()=>handleaddtoCartone(cartKey,el.products._id,1)}>+</button>
                <div style={{fontSize:"25px",backgroundColor:"white",padding:"1px 10px"}}>{el.quantity}</div>
                <button className={style.btn} onClick={()=>{if(el.quantity>1){handleaddtoCartone(cartKey,el.products._id,-1)}}}>-</button>
            </div>
            <div className={style.childcon}>
                <button className={style.btn} onClick={()=>handledelete(cartKey,el.products._id)}>Delete</button>
            </div>
            </div>
      )  
        
    })}
</div>
<div>
  <button className={style.btn}onClick={()=>Navigate("/")}>Continue Sopping</button>
  <br />
  <br />
  <button className={style.btn} onClick={()=>Navigate("/checkout")}>Proceed to checkout</button>
  <h3>Total Amount</h3>
<b>{tprice}</b>

</div>
    </div>
  )
}
