exports.HelloGet=(req,res)=>{
    res.status(200).json({status:"success",data:"Hello get "})
}

exports.HelloPost=(req,res)=>{
    res.status(201).json({status:"success",data:"Hello post"})
}