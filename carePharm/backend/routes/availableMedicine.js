const router=require('express').Router()
const medicineAvailable=require('../models/medicineAvailableModel.js')
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
const {addMedicineAvailable,getAllAvailable,updateMedicineAvailable,getAvailableById,delAvailableInfo}=require('../controller/medicineAvailbleController.js')
router.route('/').get(getAllAvailable)
router.route('/getAvilableById/:_id').get(getAvailableById)
router.route('/add').post(upload.single('image'), addMedicineAvailable);
router.route('/update/:_id').patch(upload.single('image'),updateMedicineAvailable)
router.route('/del/:_id').delete(delAvailableInfo)
module.exports=router