const asyncHandler =require('../middleware/asyncHandler.js');
const User = require("../models/usersModel.js");
const bcrypt = require('bcrypt');
const generateToken=require('../utils/generateToken.js')
// //get All user

// const getAllUsers = (req, res) => {
//   User.find({})
//     .then((users) => res.json(users))
//     .catch((err) => res.status(404).json("Error in get all users " + err));
// };
// //get user By Id
// const getUserById = async (req, res) => {
//   try {
//     const _id = req.params._id;
//     const userById = await User.findById(_id);
//     res.status(200).json(userById);
//   } catch (err) {
//     res.status(500).json("Error in return user from backend");
//   }
// };
// //create user

// const createUser = (req, res) => {
//   const username = req.body.username;
//   const email = req.body.email;
//   const password = req.body.password;
//   const newUser = new User({ username, email, password });
//   newUser
//     .save()
//     .then(() => res.json("user added"))
//     .catch((err) => res.status(404).json("Error" + err));
// };
// //Update user

// const updateUser = (req, res) => {
//   let id = req.params.id;
//   User.findByIdAndUpdate(id)
//     .then((user) => {
//       user.username = req.body.username;
//       user.email = req.body.email;
//       user.password = req.body.password;
//       user
//         .save()
//         .then(() => res.json("user updated"))
//         .catch((err) => res.status(404).json("Error" + err));
//     })
//     .catch((err) => res.status(404).json("Error" + err));
// };
// //delete user
// const delUser = (req, res) => {
//   let _id = req.params._id;
//   User.findByIdAndDelete(_id).then((user) => res.json("user deleted"));
// };
// module.exports = { getAllUsers, getUserById, createUser, updateUser, delUser };


// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
   generateToken(res,user._id)
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {username,email,password}=req.body;
  const userExists=await User.findOne({email})
  if(userExists){
    res.status(400)
    throw new Error("User already exists")
  }
  const user=await User.create({
    username,email,password
  })
  if(user){
    generateToken(res,user._id)

    res.status(200).json({
_id:user._id,
email:user.email,
username:user.username,
isAdmin:user.isAdmin
    })   
   }
    else{
      res.status(400);
      throw new Error ("invalid user data")
    }

  }

);

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie('jwt','',{
    httpOnly:true,
    expires:new Date(0)

  })
  res.status(200).json({message:"Logged out successfully"})
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user=await User.findById(req.user._id);
  if(user){
    res.status(200).json({
      _id:user._id,
      username:user.username,
      email:user.email,
      isAdmin:user.isAdmin
    })
  }
else{
  res.status(404)
  throw new Error ('User Not Found')
}
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user=await User.findById(req.user._id);
  if(user){
    user.username=req.body.username || user.username,
    user.email=req.body.email || user.email
  
  if(req.body.password){
    user.password=req.body.password
  }
  const updateUser=await user.save();
  res.json({
    _id:updateUser._id,
    username:updateUser.username,
    email:updateUser.email,
    isAdmin:updateUser.isAdmin
  })
}
else{
  res.statue(404)
  throw new Error('User Not Found')
}
  // const user = await User.findById(req.user._id);

  // if (user) {
  //   user.name = req.body.name || user.name;
  //   user.email = req.body.email || user.email;

  //   if (req.body.password) {
  //     user.password = req.body.password;
  //   }

  //   const updatedUser = await user.save();

  //   res.json({
  //     _id: updatedUser._id,
  //     name: updatedUser.name,
  //     email: updatedUser.email,
  //     isAdmin: updatedUser.isAdmin,
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error('User not found');
  // }

});

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});


// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Can not delete admin user');
    }
    await User.deleteOne({ _id: user._id });
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Get user by ID
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports= {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
