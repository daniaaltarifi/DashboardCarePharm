const router=require('express').Router();
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
const {getAllNews,getNewsById,postNews,updateNews,deleteNews}=require('../controller/newsController.js')
router.route('/').get(getAllNews)
router.route('/get/:_id').get(getNewsById)
router.route('/create').post(upload.single('image'),postNews)
router.route('/update/:_id').patch(upload.single('image'),updateNews)
router.route('/delete/:_id').delete(deleteNews)

module.exports=router
