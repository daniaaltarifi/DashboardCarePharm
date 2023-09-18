const router=require('express').Router();
const {addAdvancedMedicine,updateAdvancedMedicine,delAdvancedInfo,getAllMedicineInfo,getAdvancedById}=require('../controller/advancedMedicineController.js');
router.route('/getAllMedicine').get(getAllMedicineInfo)
router.route('/getMedicineById/:_id').get(getAdvancedById)
router.route('/create').post(addAdvancedMedicine);
router.route('/UpdateAdvancedInfo/:_id').patch(updateAdvancedMedicine)
router.route('/deleteAdvancedInfo/:_id').delete(delAdvancedInfo)
module.exports=router