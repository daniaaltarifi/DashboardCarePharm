const router=require('express').Router();
const cloudinary=require('../utils/cloudinary.js');
const upload=require('../utils/multer.js')
const {addAdvancedMedicine,updateAdvancedMedicine,delAdvancedInfo,getAllMedicineInfo,getAdvancedById}=require('../controller/advancedMedicineController.js');
router.route('/getAllMedicine').get(getAllMedicineInfo)
router.route('/getMedicineById/:_id').get(getAdvancedById)
router.route('/create').post(upload.single('image'),addAdvancedMedicine);
router.route('/UpdateAdvancedInfo/:_id').patch(upload.single('image'),updateAdvancedMedicine)
router.route('/deleteAdvancedInfo/:_id').delete(delAdvancedInfo)
module.exports=router