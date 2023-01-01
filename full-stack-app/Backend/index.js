const express = require('express');
const app = express();
const jwt = require("jsonwebtoken")
const {connection} = require('./config/db')
require('dotenv').config();
const bcrypt = require('bcrypt');
const cors = require('cors');
const {womenRoute} = require('./routes/women.route')
const {UserModel} = require('./models/User.model')
const {authentication} = require('./middlewares/authentication')
const {CartModel} = require('./models/Cart.model');
const { cartRoute } = require('./routes/cart.route');
app.use(express.json());
app.use(cors({
    origin : "*"
}))

app.get("/", (req, res) => {
    res.send("welcome")
})

app.post("/signup", async (req, res) => {
  const {email, password,type} = req.body;
  const userPre = await UserModel.findOne({email})

  if(userPre?.email){
    res.send("Try login , already exist")
  }
  else{
    try{
bcrypt.hash(password,4, async function(err,hash){
    const user = new UserModel({email,password:hash,type})
    await user.save()
    await CartModel.create({userID:user._id})
    res.send({"message": "signup successfully"})
})
    }
    catch(err){
      console.log("err",err)
      res.send("Something went wrong try again later")
    }
  }
})

app.post("/login", async (req, res)=>{
    const {email,password} = req.body;

    try{
     const user = await UserModel.find({email})

     if(user.length > 0){
        const hashed_pass = user[0].password;
        bcrypt.compare(password, hashed_pass, function(err,result){
            if(result){
                const token = jwt.sign
                ({"userID": user[0]._id}, 'hush')
                res.send({"message": "login Successfully" , "token" : token})
            }
            else{
                res.send("Login Failed")
            }
        })
     }
     else{
        res.send("Login Failed")
     }
    }
    catch(err){
        console.log("err",err)
        res.send("Something went worng, please try again later")
    }
})
//puja 63aeed10d74f0ebd959541b3
//pro 63982f243369df9a18805163
//app.use(authentication)
app.use("/womendata", womenRoute)
app.use("/cart", cartRoute)
app.listen(process.env.port, async()=> {

   try{
        await connection ;
        console.log(`server is running on port ${process.env.port}`)
    }
    catch(err){
     console.log("err",err)
    }

})