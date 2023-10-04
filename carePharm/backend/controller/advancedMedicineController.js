const advancedMedicineModel = require("../models/advancedMedicineModel.js");
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
//Get all Advanced Medicine
const getAllMedicineInfo = async (req, res) => {
  try {
    const allMedicine = await advancedMedicineModel.find({});
    res.status(200).json(allMedicine);
  } catch (err) {
    res.status(500).json({ error: `Error in getting data from advanced medicine backend: ${err}` });
  }
};
//Get Advanced Medicine by id
const getAdvancedById = async (req, res) => {
  try {
    const _id = req.params._id;
    const advancedInfo = await advancedMedicineModel.findById(_id);

    res.status(200).json(advancedInfo);
  } catch (err) {
    res.status(500).json(`Error in return advanced medicine by id${err}`);
  }
};
//Add  Advanced Medicine
const addAdvancedMedicine = async (req, res) => {
  const {
    RECORD_STATUS_DESC,
    REGISTRATION_REQUEST_NUMBER,
    REGISTRATION_REQUEST_DATE,
    DRG_SERIAL_NO,
    DRG_BARCODE,
    NAME,
    DRG_FILLING,
    DOSAGE,
    DRG_CONCENTRATE,
    STORES_DESC_L,
    INGREDIENT,
    ATCCODE,
    DRG_REG_NO,
    REGISTRATION_DATE,
    DRG_RENUAL_NO,
    RE_REGISTRATION_DATE,
    DRG_INDUST_CMP,
    DRG_INDUST_CMP_COUNTRY,
    DRG_SALES_CMP,
    DRG_SALES_COUNTRY,
    DRG_PRIMARY_CMP,
    DRG_PRIMARY_CMP_COUNTRY,
    DRG_SECONDARY_CMP,
    DRG_SECONDARY_CMP_COUNTRY,
    DRG_B_R_CMP,
    DRG_B_R_CMP_COUNTRY,
    JHP,
    JHP_TAXED,
    LIST_NAME,
    LIST_CLASSIFICATION,
    LIST_RECORD_TYPE,
    ITEM_SOURCE,
    DISP_CATEGORY,
    DRUG_TYPE,
  } = req.body;
  const result=await cloudinary.uploader.upload(req.file.path)
  const cloudinaryData = {
    avatar: result.secure_url,
    cloudinary_id: result.public_id,
  };
  advancedMedicineModel
    .create({
      RECORD_STATUS_DESC,
      REGISTRATION_REQUEST_NUMBER,
      REGISTRATION_REQUEST_DATE,
      DRG_SERIAL_NO,
      DRG_BARCODE,
      NAME,
      DRG_FILLING,
      DOSAGE,
      DRG_CONCENTRATE,
      STORES_DESC_L,
      INGREDIENT,
      ATCCODE,
      DRG_REG_NO,
      REGISTRATION_DATE,
      DRG_RENUAL_NO,
      RE_REGISTRATION_DATE,
      DRG_INDUST_CMP,
      DRG_INDUST_CMP_COUNTRY,
      DRG_SALES_CMP,
      DRG_SALES_COUNTRY,
      DRG_PRIMARY_CMP,
      DRG_PRIMARY_CMP_COUNTRY,
      DRG_SECONDARY_CMP,
      DRG_SECONDARY_CMP_COUNTRY,
      DRG_B_R_CMP,
      DRG_B_R_CMP_COUNTRY,
      JHP,
      JHP_TAXED,
      LIST_NAME,
      LIST_CLASSIFICATION,
      LIST_RECORD_TYPE,
      ITEM_SOURCE,
      DISP_CATEGORY,
      DRUG_TYPE,
      ...cloudinaryData, // Spread the cloudinaryData object here

    })
    .then((advancedMedicine) => {
      res.status(200).json(advancedMedicine );
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
//Update Advanced Medicine

const updateAdvancedMedicine = async (req, res) => {
  try {
    const _id = req.params._id;
    const oldNews = await advancedMedicineModel.findById(_id);
    await cloudinary.uploader.destroy(oldNews.cloudinary_id)
    const result=await cloudinary.uploader.upload(req.file.path)
    const updateInfo = {
      RECORD_STATUS_DESC: req.body.RECORD_STATUS_DESC,
      REGISTRATION_REQUEST_NUMBER: req.body.REGISTRATION_REQUEST_NUMBER,
      REGISTRATION_REQUEST_DATE: req.body.REGISTRATION_REQUEST_DATE,
      DRG_SERIAL_NO: req.body.DRG_SERIAL_NO,
      DRG_BARCODE: req.body.DRG_BARCODE,
      NAME: req.body.NAME,
      DRG_FILLING: req.body.DRG_FILLING,
      DOSAGE: req.body.DOSAGE,
      DRG_CONCENTRATE: req.body.DRG_CONCENTRATE,
      STORES_DESC_L: req.body.STORES_DESC_L,
      INGREDIENT: req.body.INGREDIENT,
      ATCCODE: req.body.ATCCODE,
      DRG_REG_NO: req.body.DRG_REG_NO,
      REGISTRATION_DATE: req.body.REGISTRATION_DATE,
      DRG_RENUAL_NO: req.body.DRG_RENUAL_NO,
      RE_REGISTRATION_DATE: req.body.RE_REGISTRATION_DATE,
      DRG_INDUST_CMP: req.body.DRG_INDUST_CMP,
      DRG_INDUST_CMP_COUNTRY: req.body.DRG_INDUST_CMP_COUNTRY,
      DRG_SALES_CMP: req.body.DRG_SALES_CMP,
      DRG_SALES_COUNTRY: req.body.DRG_SALES_COUNTRY,
      DRG_PRIMARY_CMP: req.body.DRG_PRIMARY_CMP,
      DRG_PRIMARY_CMP_COUNTRY: req.body.DRG_PRIMARY_CMP_COUNTRY,
      DRG_SECONDARY_CMP: req.body.DRG_SECONDARY_CMP,
      DRG_SECONDARY_CMP_COUNTRY: req.body.DRG_SECONDARY_CMP_COUNTRY,
      DRG_B_R_CMP: req.body.DRG_B_R_CMP,
      DRG_B_R_CMP_COUNTRY: req.body.DRG_B_R_CMP_COUNTRY,
      JHP: req.body.JHP,
      JHP_TAXED: req.body.JHP_TAXED,
      LIST_NAME: req.body.LIST_NAME,
      LIST_CLASSIFICATION: req.body.LIST_CLASSIFICATION,
      LIST_RECORD_TYPE: req.body.LIST_RECORD_TYPE,
      ITEM_SOURCE: req.body.ITEM_SOURCE,
      DISP_CATEGORY: req.body.DISP_CATEGORY,
      DRUG_TYPE: req.body.DRUG_TYPE,
      avatar:result.secure_url || oldNews.avatar,
      cloudinary_id:result.public_id ||oldNews.cloudinary_id
    };
    await advancedMedicineModel.findByIdAndUpdate(_id, updateInfo);
    res.status(200).json({msg:"Advanced Information Updated",data:updateInfo});
  } catch (err) {
    res.status(500).json(`Error in Feching  updated Advance Information ${err}`);
  }
};
//Delete Advanced Medicine

const delAdvancedInfo = async (req, res) => {
  try {
    const _id = req.params._id;
    const delInfo = {
      RECORD_STATUS_DESC: req.body.RECORD_STATUS_DESC,
      REGISTRATION_REQUEST_NUMBER: req.body.REGISTRATION_REQUEST_NUMBER,
      REGISTRATION_REQUEST_DATE: req.body.REGISTRATION_REQUEST_DATE,
      DRG_SERIAL_NO: req.body.DRG_SERIAL_NO,
      DRG_BARCODE: req.body.DRG_BARCODE,
      NAME: req.body.NAME,
      DRG_FILLING: req.body.DRG_FILLING,
      DOSAGE: req.body.DOSAGE,
      DRG_CONCENTRATE: req.body.DRG_CONCENTRATE,
      STORES_DESC_L: req.body.STORES_DESC_L,
      INGREDIENT: req.body.INGREDIENT,
      ATCCODE: req.body.ATCCODE,
      DRG_REG_NO: req.body.DRG_REG_NO,
      REGISTRATION_DATE: req.body.REGISTRATION_DATE,
      DRG_RENUAL_NO: req.body.DRG_RENUAL_NO,
      RE_REGISTRATION_DATE: req.body.RE_REGISTRATION_DATE,
      DRG_INDUST_CMP: req.body.DRG_INDUST_CMP,
      DRG_INDUST_CMP_COUNTRY: req.body.DRG_INDUST_CMP_COUNTRY,
      DRG_SALES_CMP: req.body.DRG_SALES_CMP,
      DRG_SALES_COUNTRY: req.body.DRG_SALES_COUNTRY,
      DRG_PRIMARY_CMP: req.body.DRG_PRIMARY_CMP,
      DRG_PRIMARY_CMP_COUNTRY: req.body.DRG_PRIMARY_CMP_COUNTRY,
      DRG_SECONDARY_CMP: req.body.DRG_SECONDARY_CMP,
      DRG_SECONDARY_CMP_COUNTRY: req.body.DRG_SECONDARY_CMP_COUNTRY,
      DRG_B_R_CMP: req.body.DRG_B_R_CMP,
      DRG_B_R_CMP_COUNTRY: req.body.DRG_B_R_CMP_COUNTRY,
      JHP: req.body.JHP,
      JHP_TAXED: req.body.JHP_TAXED,
      LIST_NAME: req.body.LIST_NAME,
      LIST_CLASSIFICATION: req.body.LIST_CLASSIFICATION,
      LIST_RECORD_TYPE: req.body.LIST_RECORD_TYPE,
      ITEM_SOURCE: req.body.ITEM_SOURCE,
      DISP_CATEGORY: req.body.DISP_CATEGORY,
      DRUG_TYPE: req.body.DRUG_TYPE,
    };
    await advancedMedicineModel.findByIdAndDelete(_id, delInfo);
    res.status(200).json(`Advanced Information Deleted`);
  } catch (err) {
    res.status(500).json(`Error in Fetching  Deleted Advanced Information ${err}`);
  }
};

module.exports = {
  addAdvancedMedicine,
  updateAdvancedMedicine,
  delAdvancedInfo,
  getAllMedicineInfo,
  getAdvancedById,
};
