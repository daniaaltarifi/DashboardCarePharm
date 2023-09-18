const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB=require('./config/db.js');
const User=require('./models/usersModel.js')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secretToken=require('crypto').randomBytes(64).toString('hex')
console.log(secretToken)
const app = express();
require('dotenv').config();
connectDB()
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST","DELETE","PATCH"],
  credentials: true,
}));
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const port = process.env.PORT || 5000;
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     res.json("Token not available");
//   } else {
//     jwt.verify(token, secretToken, (err, decoded) => {
//       if (err) {
//         return res.json("Token is wrong");
//       }
//       next();
//     });
//   }
// };
// app.get("/home", verifyUser, (req, res) => {
//   return res.json("success");
// });
// app.get("/home", verifyUser, (req, res) => {
//   return res.json("success");
// });
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   User.findOne({ email: email }).then((user) => {
//     if (user) {
//       bcrypt.compare(password, user.password, (err, isMatch) => {
//         if (err) {
//           return res.json("An error occurred during password comparison.");
//         }
//         if (isMatch) {
//           const token = jwt.sign({id: user._id }, "jwt-secret-key", {
//             expiresIn: "1d",
//           });
//           res.cookie("token", token);

//           // Log the response data before sending it as JSON
//           console.log("Response Data:", "success");
//           res.json("success");
//         } else {
//           // Log the response data before sending it as JSON
//           console.log("Response Data:", "The password is incorrect.");
//           res.json("The password is incorrect.");
//         }
//       });
//     } else {
//       // Log the response data before sending it as JSON
//       console.log("Response Data:", "No records");
//       res.json("No records");
//     }
//   });
// });
// app.post("/register", (req, res) => {
//   const {username, email, password } = req.body;
//   bcrypt.hash(password, 10).then((hash) => {
//     User
//       .create({ username, email, password: hash })
//       .then((register) => {
//         res.json(register);
//       })
//       .catch((err) => res.json(err));
//   });
// });

const usersRoute=require('./routes/users.js');
const AvailableMedicineRoute=require('./routes/availableMedicine.js')
const advancedMedicineRoute=require('./routes/advancedMedicine.js')
const newsRoute=require('./routes/news.js')
const pharmacyRoute=require('./routes/pharmacy.js')
// const connectDB = require('./config/db.js');
app.use('/users',usersRoute)
app.use('/medicineAvailable',AvailableMedicineRoute)
app.use('/advancedMedicine',advancedMedicineRoute)
app.use('/news',newsRoute)
app.use('/pharmacy',pharmacyRoute)
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
// module.exports=verifyUser