import express from 'express'
import fs from 'fs'
import { format } from 'date-fns';
const app = express();
const PORT=4000;
app.get('/',(req,res)=>{
res.status(200).json({message:"hii everyone!!"})
})
app.get('/get-data',(req,res)=>{
    res.status(200).json({message:"data",data:{name:"brindha"}})
    })
app.get('/write-read',(req,res)=>{
    let today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss')
    const filePath=`TimeStamp/${today}.txt`
    console.log(today);
    let data= fs.writeFileSync(filePath,`${today}`,'utf8')
    res.status(200).send(data)
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
