const {CartModel} = require('../models/Cart.model');

const CatdAuth = async(req,res,next)=>{
try{
    let user_id = req.body.userID 
    let cartid = req.params.id  ///card id
    console.log("cdet",cartid)
    let cart_det = await CartModel.findById({_id: cartid})  //whole card product perticular user
    //console.log("cdet",cart_det)
    if(cart_det.userID !== user_id){
        return res.send("not valid user")
    }
   next()
}
catch(err){
    console.log("cartauth",err)
}
}

module.exports = {CatdAuth}