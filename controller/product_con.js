
const model=require('../model/product_mod');
const Product=model.Product;

////For Create
exports.create=(req,res)=>{
    const product=new Product(req.body);
    product.save().then(()=>{
        res.status(201).json(req.body);
    }).catch((err)=>{
        res.status(201).json(err);
    })
}
////For Read
exports.getAll=async(req, res)=>{
    const products=await Product.find();
    res.json(products);
}
exports.get=async(req, res)=>{
    const id=req.params.id;
    const product=await Product.findById(id);
    res.json(product);
}
////For Update
exports.replace=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findOneAndReplace({_id:id}, req.body, {new:true});
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
        const doc=await Product.findOneAndUpdate({_id:id}, req.body, {new:true});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
////For Delete
exports.delete=async(req, res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findOneAndDelete({_id:id});
        res.status(201).json(doc);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}