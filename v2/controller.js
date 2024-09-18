export const getall=(req,res)=>{
    res.status(200).json({message:"Welcome to v2"});
}
export const getdata=(req,res)=>{
    res.status(200).json({
        v2:"2.01",
        publisher:"Gagan"
    })
}

export const getUpdates=(req,res)=>{
    res.status(200).json({updates: "This new update is for version 2 and the application is more secure than previously"})
}