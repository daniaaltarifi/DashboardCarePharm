const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pharmacySchema = new Schema({
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    postal_code: String,
  },
  phone: String,
  email: String,
  website: String,
  hours_of_operation: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  services: [String],
  avatar:String,
  cloudinary_id:{
    type:String
  },
});

const pharmacyModel = mongoose.model("pharmacy", pharmacySchema);
module.exports = pharmacyModel;
