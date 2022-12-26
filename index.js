
const express = require('express')
const mongoose = require('mongoose')
const { request } = require('https')
const BrandName =require('./model')
const { response } = require('express')
const app=express()

app.use(express.json()) //medele ware express

mongoose.connect('mongodb+srv://bhagya:bhagya@cluster0.89jzhge.mongodb.net/?retryWrites=true&w=majority').then(
    ()=> console.log('db connected')
).catch( (err) => console.log(err) )

app.post('/addBrands', async(request,response) => {
    const {brandName} = request.body;
    try{
        const newData = new BrandName({brandName})
        await newData.save();
        return response.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/',  async(request,response) => {
    try{
        return response.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.delete('/delete/:id', async(request,response) => {
    const {id} = request.params 
    try{
        await BrandName.findByIdAndDelete(id)

    }
    catch(err){
        console.log(err.message)
    }
})

app.get('/getALlData/:id', async(request,response) => {
    const {id} = request.params
    try {
        return response.json(await BrandName.findById(id)) 
    }
    catch(err) {
        console.log(err)
    }
})

app.put('/update/:id',async(request,response) => {
    const {id} = request.params
    try{
        await BrandName.findOneAndUpdate({_id:id}, request.body)
    }
    catch(err){
        console.log(err.message)
    }
})

// app.post('./update/')


app.listen(3007, () => console.log('running port'))

