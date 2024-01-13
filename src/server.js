const express=require('express');
const monooseConnect=require('./config/dbConfig');


const app=express();

app.listen(6000,async()=>{
 console.log("server has started");
 await monooseConnect();
 console.log("mongoose connected");
});