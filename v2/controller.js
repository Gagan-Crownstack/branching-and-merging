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

export const featureA=(req,res)=>{
    res.status(200).json({
        name:"FeatureA",
        des:"this will divide the work load equally",
        
    })
}

export const featureB =(req,res)=>{
    res.status(200).json({
        name:"FeatureB",
        des:"This app is use AI to track user money"
    })
}

export const featureC=(req,res)=>{
    res.status(200).json({
        name:"Featurec",
        des:"This feature checks if you are available for Loan or not"
    })
}