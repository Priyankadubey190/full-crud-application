const express = require('express');
const { authentication } = require('../middlewares/authentication');
const { adminmiddleware } = require('../middlewares/authorization');
const {WomenModel} = require('../models/Women.model');
const womenRoute = express.Router();

womenRoute.get("/", async (req, res)=>{
    let qur = req.query
    let size = qur.size || 5;
    let page = qur.page || 1;
    const data = await WomenModel.find(qur).limit(size).skip((page-1)*size)
    res.send(data)
})

//63982f243369df9a18805164   detail

womenRoute.get("/prodectdetails/:id", async (req, res)=>{
    let qur = req.params.id
    // let size = qur.size || 5;
    // let page = qur.page || 1;
    const data = await WomenModel.findOne({_id:qur})
    res.send(data)
})

womenRoute.use(authentication)
womenRoute.use(adminmiddleware)
womenRoute.post("/post", async (req, res)=>{
    const payload = req.body
    try{
        const new_data = await WomenModel.insertMany([payload]);
        res.send (new_data)
    }
    catch(err){
        console.log("err",err)
        res.send({"err": "Something went wrong"})
    }
})

womenRoute.patch("/patch/:id", async (req, res)=>{
    const ids = req.params.id
    const dataid = req.body.userID
    const payload = req.body
    const latest_todo = await WomenModel.findOne({_id:ids})

    if(dataid != latest_todo.userID){
        res.send("User not authoriged")
    }
    else{
        await WomenModel.findByIdAndUpdate({_id:ids},payload)
        res.send({"message": "Data Updated"})
    }
})

womenRoute.delete("/delete/:id" , async(req,res)=>{
    const ids = req.params.id
    const dataid = req.body.userID
    const latest_todo = await WomenModel.findOne({_id:ids})

    if(dataid != latest_todo.userID){
        res.send("User not authoriged")
    }
    else{
        await WomenModel.findByIdAndDelete({_id:ids})
        res.send({"message": "Data Deleted"})
    }
})

module.exports = {womenRoute}
