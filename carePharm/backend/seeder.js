const mongoose=require('mongoose');
const users=require('./data/users.js')
const medicineAvailable=require('./data/medicineAvailable.js')
const User=require('./models/usersModel.js')
const MedicineAvailable=require('./models/medicineAvailableModel.js')
const pharmacyModel=require('./models/pharmacyModel.js')
const pharmacy=require('./data/pharmacy.js')
const dotenv=require('dotenv')//check
const connectDB=require('./config/db.js')
dotenv.config();
connectDB();

const importData = async () => {
    try {
      await User.deleteMany(); // Clear existing users data
      await MedicineAvailable.deleteMany()
      await pharmacyModel.deleteMany()
      const createUsers = await User.insertMany(users);
      const createMedicineAvailable=await MedicineAvailable.insertMany(medicineAvailable)
      const createPharmacy=await pharmacyModel.insertMany(pharmacy)
      console.log("Data imported!");
      process.exit(0); // Exit the script with success code (0)
    } catch (error) {
      console.error(`${error}`);
      process.exit(1); // Exit the script with error code (1)
    }
  };
  
  const destroyData = async () => {
    try {
      // await User.deleteMany();
      // await MedicineAvailable.deleteMany()
      await pharmacyModel.deleteMany();
      console.log("Data destroyed!");
      process.exit(0); // Exit the script with success code (0)
    } catch (error) {
      console.error(`${error}`);
      process.exit(1); // Exit the script with error code (1)
    }
  };
  
  
  if (process.argv[2] == '-d') {
    destroyData();
  } else {
    importData();
  }