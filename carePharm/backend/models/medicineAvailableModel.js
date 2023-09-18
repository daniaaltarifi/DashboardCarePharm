const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const medicineAvailableSchema = new Schema({
  avatar:{
    type:String
  },
  cloudinary_id:{
    type:String
  },
  DRG_SERIAL_NO:{
    type:Number,
  },
  BARCODE:{
    type:Number,
  },
  NAME: {
    type: String,
  },
  DRG_FILLING: {
    type: String,
  },
  DOSAGE: {
    type: String,
  },
  DRG_CONCENTRATE: {
    type: String,
  },
  STORES_DESC_L: {
    type: String,
  },
  ATCCODE:{
    type:String,
  },
  DRG_PRIMARY_CMP_COUNTRY: {
    type: String,
  },
  JPP: {
    type: Number,
  },

  PHARM_P:{
    type:Number,
  },
  // DRG_INDUST_CMP:{
  //   type:String,
  //   required:true,
  // },
  // DRG_INDUST_CMP_COUNTRY:{
  //   type:String,
  //   required:true,
  // },
  // INGREDIENT: {
  //   type: String,
  //   required: true,
  // },

  // JPP_PREVIOUS: {
  //   type: Number,
  //   required: true,
  // },
},{timestamps:true});
const medicineAvailable = mongoose.model(
  "medicineAvailable",
  medicineAvailableSchema
);
module.exports = medicineAvailable;
