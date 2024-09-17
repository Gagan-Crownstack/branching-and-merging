export const fetchall=(req,res)=>{
    res.status(200).json({message:"welcome to v1 API"})
}

export const fetchData=(req,res)=>{
    res.status(200).json({data:{
        version_name:1.01,
        publush_by:"gagan Prakash"
    }})
}