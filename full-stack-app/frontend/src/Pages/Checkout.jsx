import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import style from "./checkout.module.css";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [name, setName] = useState("");
  const [city,setCity] = useState("");
  const [district,setDistrict] = useState("");
  const [state,setState] = useState("");
  const [pincode,setPincode] = useState("");
  const [contact,setContact] = useState("");
  const [address,setAddress] = useState("");

  const [tprice,setTprice] = useState(0)
  const Navigate = useNavigate();
  const auth = useSelector((state) => state.AuthReducer.token);

  const cartData = useSelector((state) => state.AppReducer.cartData);

  const cartKey = useSelector((state) => state.AppReducer.cartKey);

  const handleSetPrice = ()=>{
    let tpr = 0
    cartData.forEach((el)=>{
      console.log("el",el.products)
       tpr = tpr+ Number(el.products.price)*Number(el.quantity)
    })
  
    console.log("tpr",tpr)
    setTprice(tpr)
  }

  const handleDelete = (cartKey) => {

    if(name==="" || city==="" || district==="" || state==="" || pincode==="" || contact==="" || address===""){
      alert("Please Fill All Details")
    }
    else{
      axios
      .delete(
        `https://gleaming-suspenders-bass.cyclic.app/cart/delete/${cartKey}`,
        {
          headers: {
            authorization: auth,
          },
        }
      )
      .then((r) => {
        console.log("deleteCart", r.data);
        alert("Thanks for shoping")
      })
      .catch((err) => {
        console.log("ErrdeleteAllCart", err);
      });
    } 
  };

  const handleDiscount = ()=>{
    let discount = tprice-(tprice*20)/100

    setTprice(discount)
  }

  useEffect(()=>{
    handleSetPrice()
  },[])

  return (
    
    <div className={style.container}>
      <h1>Checkout</h1>
      <div className={style.childcon}>
        <div className={style.left}>
          <div>
            
            <label htmlFor="">Name</label>
            <br />
            <label htmlFor="">City</label>
            <br />
            
            <label htmlFor="">District</label>
            <br />
            <label htmlFor="">State</label>
            <br />
            <label htmlFor="">Pincode</label>
            <br />
            <label htmlFor="">Contact Number</label>
            <br />
            <label htmlFor="">Address</label><br />
            <div style={{display:"flex"}}>

            </div>
            <div style={{fontSize:"18px",fontWeight:"bold"}}><input type="radio" name="pay" />Razorpay</div>
<div style={{fontSize:"18px",fontWeight:"bold"}}><input type="radio" name="pay"/>Cash on Delivery</div>
            <br />
            <br />
            <br />
            <button className={style.btn} onClick={() => handleDelete(cartKey)}>
              Submit
            </button>
            <br />
          </div>
          <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" className={style.myinput}/>
            <br />
            <input type="text" onChange={(e) => setCity(e.target.value)}placeholder="Enter City Name" className={style.myinput} />
            <br />
            <input type="text" onChange={(e) => setDistrict(e.target.value)}placeholder="Enter District Name" className={style.myinput} />
            <br />
            <input type="text" onClick={(e)=>setState(e.target.value)} placeholder="Enter State Name" className={style.myinput} />
            <br />
            <input type="text" onClick={(e)=>setPincode(e.target.value)} placeholder="Enter Your Pincode" className={style.myinput} />
            <br />
            <input type="text" onClick={(e)=>setContact(e.target.value)} placeholder="Enter Contact Number" className={style.myinput} />
            <br />
            <input type="text" onClick={(e)=>setAddress(e.target.value)} placeholder="Enter Your Address" className={style.myinput} />
            <br />
          </div>
        </div>
        <div>
          <div>
            <button className={style.btn} onClick={() => Navigate("/")}>
              Continue Sopping
            </button>

            <button className={style.btn} onClick={handleDiscount} >Use Coupan</button>
          </div>

          <b>Total Price: {tprice} </b>
        </div>
      </div>
    </div>
  );
}
