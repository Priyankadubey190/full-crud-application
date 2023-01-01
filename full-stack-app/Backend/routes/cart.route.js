const {CartModel} = require('../models/Cart.model')
const { authentication } = require('../middlewares/authentication');
const {CatdAuth} = require('../middlewares/cartAuthorization')
const {Router} = require('express');
const { WomenModel } = require('../models/Women.model');
cartRoute = Router()
cartRoute.use(authentication)


cartRoute.get("/", async(req,res)=>{
  try{
    let data = await CartModel.findOne({userID:req.body.userID});
    let cartarr = []
    for(let i=0;i<data.products.length;i++){
        let pro = data.products[i].product_id
        let mydata = await WomenModel.findById({_id:pro})
       
       let obj = {
        products: mydata,
        quantity: data.products[i].quantity
       }
       cartarr.push(obj)
       console.log("first")
    }
    console.log("cartarr",cartarr)
    res.send({productarr:cartarr,cartkey:data._id})
  }
  catch(err){
    console.log("cartget",err)
  }
})
//63aeed2dd74f0ebd959541b8
//cartRoute.use(CatdAuth)
cartRoute.post("/:id",CatdAuth, async(req,res)=>{
    try{
     let id = req.params.id;
     let payload = req.body
     let mycart = await CartModel.findById({_id:id})
     
     //console.log("py",mycart.products)
    let arr =  mycart.products
    let flag = false;
    arr.map((el)=>{
        if(el.product_id == payload.products[0].product_id){
            el.quantity = el.quantity+payload.products[0].quantity
            flag = true
        }
        
    })
    if(!flag){

        arr.push(payload.products[0])
    }
     let mydata = await CartModel.findByIdAndUpdate({_id:id},{products:arr}, {new:true})

     res.send(mydata)
    }
    catch(err){
        console.log("cart",err)
    }
})

cartRoute.delete("/delete/:id", CatdAuth, async(req,res)=>{
  try{
    let id = req.params.id;
    //let mycart = await CartModel.findById({_id:id})
    
    let mydata = await CartModel.findByIdAndUpdate({_id:id},{products:[]}, {new:true})

     res.send(mydata)
  }
  catch(err){
    console.log("checkout",err)
  }
})

module.exports = {cartRoute}