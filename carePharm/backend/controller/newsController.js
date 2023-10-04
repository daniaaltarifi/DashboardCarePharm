const newsModel = require("../models/newsModel.js");
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
//get all news
const getAllNews = async (req, res) => {
  try {
    const news = await newsModel.find({});
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json(`Error In Getting All News${err}`);
  }
};
//get news by id
const getNewsById = async (req, res) => {
  try {
    const _id = req.params._id;
    const newsById = await newsModel.findById(_id);
    res.status(200).json(newsById);
  } catch (err) {
    res.status(500).json(`Error In Getting NewsById${err}`);
  }
};
//post news
const postNews = async (req, res) => {
  try {
    const { title, date, summary, description } = req.body;
    const result=await cloudinary.uploader.upload(req.file.path)
    const cloudinaryData = {
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    };
    const createNews = new newsModel({ title, date, summary, description, ...cloudinaryData, // Spread the cloudinaryData object here
});
    createNews.save();
    res.status(200).json(createNews);
  } catch (err) {
    res.status(500).json(`Error In create News${err}`);
  }
};
//Update news
const updateNews = async (req, res) => {
  try {
    const _id = req.params._id;
    const oldNews = await newsModel.findById(_id);

    await cloudinary.uploader.destroy(oldNews.cloudinary_id)
    const result=await cloudinary.uploader.upload(req.file.path)
    const update = {
      title: req.body.title,
      summary: req.body.summary,
      description: req.body.description,
      avatar:result.secure_url || oldNews.avatar,
      cloudinary_id:result.public_id ||oldNews.cloudinary_id
    };
    await newsModel.findByIdAndUpdate(_id, update);
    res.status(200).json(update);
  } catch (err) {
    res.status(500).json(`Error In update News${err}`);
  }
};

const deleteNews = async (req, res) => {
  try {
    const _id = req.params._id;
    await newsModel.findByIdAndDelete(_id);
    res.status(200).json("News Deleted");
  } catch (error) {
    res.status(500).json(`Error In deleted News${error}`);
  }
};
module.exports = { getAllNews, getNewsById, postNews, updateNews, deleteNews };
