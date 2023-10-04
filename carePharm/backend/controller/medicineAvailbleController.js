const medicineAvailable = require("../models/medicineAvailableModel.js");
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
//Get all Available Medicine
const getAllAvailable= async (req, res) => {
  try {
    const allMedicine = await medicineAvailable.find({});
    res.status(200).json(allMedicine );
  } catch (err) {
    res.status(500).json({ error: `Error in getting data from available medicine backend: ${err}` });
  }
};
//Get Available Medicine by id
const getAvailableById = async (req, res) => {
  try {
    const _id = req.params._id;
    const availableInfo = await medicineAvailable.findById(_id);

    res.status(200).json(availableInfo);
  } catch (err) {
    res.status(500).json(`Error in return advanced medicine by id${err}`);
  }
};
const addMedicineAvailable = async (req, res) => {
  
  const {
    DRG_SERIAL_NO,
    BARCODE,
    NAME,
    DRG_FILLING,
    DOSAGE,
    DRG_CONCENTRATE,
    STORES_DESC_L,
    ATCCODE,
    DRG_PRIMARY_CMP_COUNTRY,
    JPP,
    PHARM_P,
  } = req.body;
  
  const result=await cloudinary.uploader.upload(req.file.path)
  const cloudinaryData = {
    avatar: result.secure_url,
    cloudinary_id: result.public_id,
  };
  medicineAvailable
    .create({
      DRG_SERIAL_NO,
      BARCODE,
      NAME,
      DRG_FILLING,
      DOSAGE,
      DRG_CONCENTRATE,
      STORES_DESC_L,
      ATCCODE,
      DRG_PRIMARY_CMP_COUNTRY,
      JPP,
      PHARM_P,
      ...cloudinaryData, // Spread the cloudinaryData object here

    })
    .then((medicine) => {
      res.json(medicine);
    })
    .catch((err) => {
      res.json(`Error in post data backend${err.response}`);
    });
};
const updateMedicineAvailable = async (req, res) => {
  let _id = req.params._id;
  const oldNews = await medicineAvailable.findById(_id);
  await cloudinary.uploader.destroy(oldNews.cloudinary_id)
  const result=await cloudinary.uploader.upload(req.file.path)
  medicineAvailable.findById(_id).then((update) => {
    update.DRG_SERIAL_NO = req.body.DRG_SERIAL_NO;
    update.BARCODE = req.body.BARCODE;
    update.NAME = req.body.NAME;
    update.DRG_FILLING = req.body.DRG_FILLING;
    update.DOSAGE = req.body.DOSAGE;
    update.DRG_CONCENTRATE = req.body.DRG_CONCENTRATE;
    update.STORES_DESC_L = req.body.STORES_DESC_L;
    update.ATCCODE = req.body.ATCCODE;
    update.DRG_PRIMARY_CMP_COUNTRY = req.body.DRG_PRIMARY_CMP_COUNTRY;
    update.JPP = req.body.JPP;
    update.avatar=result.secure_url || oldNews.avatar;
    update.cloudinary_id=result.public_id || oldNews.cloudinary_id
 
    update
      .save()
      .then(() => {
        res.json(" Available medication information Updated");
      })
      .catch((error) => {
        res.json(`Error in updating medicine Available backend${error}`);
      });
  });
};
//Delete Advanced Medicine

const delAvailableInfo = async (req, res) => {
  try {
    const _id = req.params._id;
    const delInfo = {
     DRG_SERIAL_NO :req.body.DRG_SERIAL_NO,
     BARCODE :req.body.BARCODE,
     NAME :req.body.NAME,
     DRG_FILLING : req.body.DRG_FILLING,
     DOSAGE : req.body.DOSAGE,
     DRG_CONCENTRATE : req.body.DRG_CONCENTRATE,
     STORES_DESC_L : req.body.STORES_DESC_L,
     ATCCODE : req.body.ATCCODE,
     DRG_PRIMARY_CMP_COUNTRY : req.body.DRG_PRIMARY_CMP_COUNTRY,
     JPP : req.body.JPP,
    };
    await medicineAvailable.findByIdAndDelete(_id, delInfo);
    res.status(200).json(`Available Information Deleted`);
  } catch (err) {
    res.status(500).json(`Error in Fetching  Deleted Available Information ${err}`);
  }
};
module.exports = { addMedicineAvailable, updateMedicineAvailable,getAllAvailable,getAvailableById,delAvailableInfo };
