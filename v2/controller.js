export const getall=(req,res)=>{
    res.status.json({message:"Welcome to v2"});
}
export const getdata=(req,res)=>{
    res.status(200).json({
        v2:"2.01",
        publisher:"Gagan"
    })
}