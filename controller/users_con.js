
const model=require('../model/user_mod');
const User=model.User;

exports.create=(req,res)=>{
    const user=new User(req.body);
    user.save().then(()=>{
        res.status(201).json(req.body);
    }).catch((err)=>{
        res.status(201).json(err);
    })
}
exports.getAll=async(req, res)=>{
    const users=await User.find();
    res.json(users);
}
exports.get=async(req, res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    res.json(user);
}
exports.replace=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndReplace({_id:id}, req.body, {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
exports.update=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndUpdate({_id:id}, req.body, {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
exports.delete=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await User.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}