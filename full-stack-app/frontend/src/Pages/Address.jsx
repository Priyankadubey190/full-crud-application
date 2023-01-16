import React from 'react'
import "./address.css"
export default function Address() {
  return (
    <div className="addressmy">
        <div className="container">
    <div className="top">
      <span className="sp1">Home</span>
      <i className="fas fa-chevron-right"></i>
      <span className="sp2">Checkout</span>
    </div>
    <div className="bottom">
      <div className="left">
        <span>Checkout</span>
        <div className="col">
          <div className="colt">
            <div className="on or">1</div>
            <span>Login or Signup</span>
          </div>
          <div className="colb">
             {/* <input type="text" placeholder="name"> <input type="text" placeholder="phone">  */}
            <span id="p_login_name"></span>
            <span id="p_login_number"></span>
          </div>
        </div>

        <div className="adcol2">
          <div className="col2tp">
            <div className="on wh">2</div>
            <span>Shipping Address & Billing Address
            </span>
          </div>
          <center className="cen">Please Add Address!</center>
          <div className="adcol2b">
             {/* address detail  */}
           <center className="cen2 bold">New Address</center>
           <div className="adbot">
            <div className="adlef">
                <p>Customer Tag Name <span className="str">*</span>
               </p>
               <input type="text" placeholder="Provide Tag Like Home/Office to Identified Customer Addre" className="adinp" />

               <p>Customer Mobile <span className="str">*</span>
               </p>
               <input type="text" placeholder="Enter the customer mobile Number" className="adinp" id="mob" />
               <p>Pincode <span className="str">*</span>
               </p>
               <input type="text" placeholder="Enter the customer pincode" className="adinp" id="pin" />
              </div>
   
              <div className="adrig">
                <p>Customer Name <span className="str">*</span>
                </p>
                <input type="text" placeholder="Enter the customer name" className="adinp" id="name" />

                <p>Alternate Phone (Optional) <span className="str">*</span>
                </p>
                <input type="text" placeholder="Enter the Alternate Phone" className="adinp" />

                <p>Locality <span className="str">*</span></p>
                    
                    <select name="" id="" className="opt">
                        <option value="" className="opt"> Select Locality</option>
                        
                    </select>
                
              </div>
           </div>
           <p>Address <span className="str">*</span></p>
           <textarea name="" id="add" cols="30" rows="10" className="adinp2" placeholder="Enter the customer address" ></textarea>
            {/* bnnhb  */}

           <div className="adbot">
            <div className="adlef">
                <p>District </p>
               <br/>
               <input type="text" placeholder="Enter the District" className="adinp" id="dis" />

               <p>City <span className="str">*</span>
               </p>
               <input type="text" placeholder="Enter the City" className="adinp" id="city" />
              </div>
   
              <div className="adrig">
                <p>Landmark <span className="str">*</span>
                </p>
                <input type="text" placeholder="Enter the landmark" className="adinp" id="lam" />

                <p>State <span className="str">*</span>
                </p>
                <input type="text" placeholder="Enter State" className="adinp" id="state" />
              </div>
           </div>
           <br />
           <div className="check">
               <div className="checklef">
                <input type="checkbox" name="" id="" /> <span className="cheksp" >Primary Address</span>
               </div>
            <div className="checkrit">
                <input type="checkbox" name="" id="" /> <span className="cheksp">Shipping Address</span>
            </div>
           </div>
           <a href="secondcheck.html"><button className="btnsv" onclick="detail()">SAVE AND CONTINUE</button></a>
          </div>
        </div>

        <div className="col3">
          <div className="on or">3</div>
          <span>Products</span>
        </div>
        <div className="col3">
          <div className="on or">4</div>
          <span>Shipping Method</span>
        </div>
        <div className="col3">
          <div className="on or">5</div>
          <span>Choose Payment Mode
          </span>
        </div>
      </div>
      <div className="right">
        <div className="to">
          <span className="lef">Order Summary </span>
          <span className="rig">( 763a89#### )</span>
        </div>
        <div className="ritop">
          <div className="di1ritop">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tag_font_awesome.svg/768px-Tag_font_awesome.svg.png"
              alt="" className="cop" />
            <span>Use Coupon Code</span>
          </div>
          <h3>Enter your coupon code if you have one.</h3>
          <div className="copcode">
            <input type="text" placeholder="Enter Your Coupon Code" id="e_coupon" />
            <button id="copbtn" onclick="coupon_apply()"> APPLY</button>
          </div>
        </div>
         <div className="price">
           
          <div className="itepr">
            <p>Items Price (without tax):</p>
            <p><b>₹</b> <span id="p_wot">0.00</span></p>
          </div>

          <div className="itepr">
           <p>CGST:</p>
           <p><b>₹</b><span id="p_cgst"> 0.00</span></p>
         </div>
         <div className="itepr">
           <p>SGST:</p>
           <p><b>₹</b><span id="p_sgst"> 0.00</span></p>
         </div>
         <div className="itepr">
           <p className="bold">SubTotal:</p>
           <p><b>₹</b><span id="sub_total"> 0.00</span></p>
         </div>
         <div className="itepr">
           <p>Discount Price:</p>
           <p><b>₹</b><span id="dis_p"> 0.00</span></p>
         </div>
         <div className="itepr">
           <p>Pai Wallet :</p>
           <p><b>₹</b> <span>0.00</span> </p>
         </div>
         <div className="itepr">
           <p>Gift Wrap :</p>
           <p><b>₹</b> <span>0.00</span> </p>
         </div>
         <div className="itepr">
           <p>Shipping Charge :</p>
           <p><b>₹</b> <span>0.00</span> </p>
         </div>
         <div className="itepr">
           <p className="bold">Total Price :</p>
           <p><b>₹</b> <span id="tot_p">0.00</span> </p>
         </div>
         </div>
      </div>
    </div>
  </div>
    </div>
  )
}
