const jwt = require("jsonwebtoken");

const authentication = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token, "hush")
        if(decoded){
            console.log("decoded",decoded.userID);
            const userID = decoded.userID
            req.body.userID = userID
            next()

        }

        else{
            res.send("Please login")
        }
    }
    else{
        res.send("Please login")
    }
}

module.exports = {authentication}