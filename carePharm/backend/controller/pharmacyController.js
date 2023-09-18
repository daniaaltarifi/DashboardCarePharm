const pharmacyModel=require('../models/pharmacyModel.js')
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
//get all pharmacy
const getAllPharmacy=async(req,res)=>{
try{
   const pharmacy= await pharmacyModel.find({})
res.status(200).json(pharmacy)
}
catch(err){
    res.status(500).json(`Error In Getting All Pharmacy${err}`)

}
}
// get pharmacy by id
const getPharmacyById=async(req,res)=>{
    try{
     const _id=req.params._id;
     const pharmacyById=await  pharmacyModel.findById(_id);
     res.status(200).json(pharmacyById);
    }
    catch(err){
        res.status(500).json(`Error In Getting PharmacyById${err}`)

    }
}
//post pharmacy 
const postPharmacy=async (req,res)=>{
    try{
        const {name,address,phone,email,website,hours_of_operation,services}=req.body
        const result=await cloudinary.uploader.upload(req.file.path)
        const cloudinaryData = {
          avatar: result.secure_url,
          cloudinary_id: result.public_id,
        };
const createPharmacy=new pharmacyModel({name,address,phone,email,website,hours_of_operation,services,...cloudinaryData,})
createPharmacy.save()
res.status(200).json(createPharmacy)
    }
    catch(err){
        res.status(500).json(`Error In create Pharmacy${err}`)

    }
}
//Update pharmacy
const updatePharmacy=async(req,res)=>{
    try{
const _id=req.params._id;
const update={
    name:req.body.name,
    address:req.body.address,
    phone:req.body.phone,
    email:req.body.email,
    website:req.body.website,
    hours_of_operation:req.body.hours_of_operation,
    services:req.body.services,
}
await pharmacyModel.findByIdAndUpdate(_id,update);
res.status(200).json({msg:"pharmacy Updated",data:update})
    }
    catch(err){
        res.status(500).json(`Error In update pharmacy${err}`)

    }
}

const deletePharmacy=async(req,res)=>{
    try {
          const _id=req.params._id;
    await pharmacyModel.findByIdAndDelete(_id);
    res.status(200).json("Pharmacy Deleted")
    } catch (error) {
        res.status(500).json(`Error In deleted Pharmacy${error}`)

    }
  

}
module.exports={getAllPharmacy,getPharmacyById,postPharmacy,updatePharmacy,deletePharmacy}