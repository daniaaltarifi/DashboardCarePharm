const mongoose = require("mongoose");

const schema = mongoose.Schema;
const advancedMedicineSchema = new schema({
  RECORD_STATUS_DESC: {
    type: String,
  },
  REGISTRATION_REQUEST_NUMBER: {
    type: String,
  },
  REGISTRATION_REQUEST_DATE: { type: Date },
  DRG_SERIAL_NO: { type: Number },
  DRG_BARCODE: { type: Number },
  NAME: { type: String },
  DRG_FILLING: { type: String },
  DOSAGE: { type: String },
  DRG_CONCENTRATE: { type: String },
  STORES_DESC_L: { type: String },
  INGREDIENT: { type: String },
  ATCCODE: { type: String },
  DRG_REG_NO: { type: String },
  REGISTRATION_DATE: { type: Date },
  DRG_RENUAL_NO: { type: String },
  RE_REGISTRATION_DATE: { type: Date },
  DRG_INDUST_CMP: { type: String },
  DRG_INDUST_CMP_COUNTRY: { type: String },
  DRG_SALES_CMP: { type: String },
  DRG_SALES_COUNTRY: { type: String },
  DRG_PRIMARY_CMP: { type: String },
  DRG_PRIMARY_CMP_COUNTRY: { type: String },
  DRG_SECONDARY_CMP: { type: String },
  DRG_SECONDARY_CMP_COUNTRY: { type: String },
  DRG_B_R_CMP: { type: String },
  DRG_B_R_CMP_COUNTRY: { type: String },
  JHP: { type: Number },
  JHP_TAXED: { type: Number },
  LIST_NAME: { type: String },
  LIST_CLASSIFICATION: { type: String },
  LIST_RECORD_TYPE: { type: String },
  ITEM_SOURCE: { type: String },
  DISP_CATEGORY: { type: String },
  DRUG_TYPE: { type: String },
},{timestamps:true});
const advancedMedicineModel=mongoose.model("advancedMedicine",advancedMedicineSchema);
module.exports=advancedMedicineModel