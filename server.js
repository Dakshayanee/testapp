const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname})
   
})

app.listen(8080)
console.log("server is running on 8080")