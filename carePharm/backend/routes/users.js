const router = require("express").Router();
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require("../controller/usersController.js");
const {protect,admin}=require('../middleware/authMiddleware.js')
// const {getAllUsers,getUserById,createUser,updateUser,delUser}=require('../controller/usersController.js')
// router.route('/').get(getAllUsers)
// router.route('/getUser/:_id').get(getUserById)
// router.route('/add').post(createUser)
// router.route('/del/:_id').delete(delUser)
// router.route('/update/:id').patch(updateUser)
router.route("/").post(registerUser).get(protect,admin,getUsers);
router.post("/auth", authUser);//login
router.post("/logout", logoutUser);
router.route("/profile").get(protect,getUserProfile).patch(protect,updateUserProfile);
router.route("/:id").delete(protect,admin,deleteUser).get(protect,admin,getUserById).put(protect,admin,updateUser);
module.exports = router;
//admin route
//get /users
//get userbyid /users/:id
//delete userbyid /users/:id
//update userbyid /users/:id
