const express=require('express')
const products =require('./data/products')
const dotenv =require('dotenv')
const colors =require('colors')  
const connectDB=require('./Database/connection')
const app =express()

dotenv.config()


connectDB()  

app.get('/',(req,res)=>{
    res.send("api is running")
})
 

app.get('/api/products',(req,res)=>{
    res.json(products)
})


app.get('/api/products/:id',(req,res)=>{
     const product=products.find((p) => p._id === req.params.id)
     res.json(product)
})


 const PORT=process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`server runnning in  ${PORT}`.bgYellow.bold)
})