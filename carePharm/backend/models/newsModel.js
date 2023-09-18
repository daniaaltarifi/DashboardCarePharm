const mongoose = require("mongoose");
const schema = mongoose.Schema;
const newsDataModel = new schema(
  {
    title: {
      type: String,
    },
  
    summary: {
      type: String,
    },
    description: {
      type: String,
    },
    avatar:{
      type:String
    },
    cloudinary_id:{
      type:String
    },
  },
  { timestamps: true }
);
const newsModel = mongoose.model("News", newsDataModel);
module.exports = newsModel;
