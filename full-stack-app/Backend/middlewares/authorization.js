const {WomenModel} = require('../models/Women.model');
const {UserModel} = require('../models/User.model');
const adminmiddleware = async(req,res,next)=>{
    try{
        let user_id = req.body.userID 
        let user = await UserModel.findById({_id:user_id});
        if(user.type = "user"){
            return res.send("Perminitation denia")
        }
        next()

    }
    catch(err){
        console.log("auth",err)
    }
}

module.exports = {adminmiddleware}