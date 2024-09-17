import express from 'express'

const app= express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to git examples"})
})

app.listen(PORT, (req,res)=>{
    console.log(`Your application is running on Port http://localhost:${PORT}`);
})