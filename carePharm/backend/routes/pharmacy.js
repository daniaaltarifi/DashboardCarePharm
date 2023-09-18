const router=require("express").Router();
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
const {getAllPharmacy,getPharmacyById,postPharmacy,updatePharmacy,deletePharmacy}=require('../controller/pharmacyController.js');
router.route('/').get(getAllPharmacy)
router.route('/get/:_id').get(getPharmacyById)
router.route('/post').post(upload.single('image'), postPharmacy)
router.route('/update/:_id').patch(updatePharmacy)
router.route('/delete/:_id').delete(deletePharmacy)
module.exports=router