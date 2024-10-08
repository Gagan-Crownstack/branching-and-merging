import express from 'express'
import v1router from './v1/route.js';
import v2router from './v2/route.js'

const app= express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to git examples"})
})

app.use('/v1',v1router);
app.use('/v2',v2router);

app.listen(PORT, (req,res)=>{
    console.log(`Your application is running on Port http://localhost:${PORT}`);
})