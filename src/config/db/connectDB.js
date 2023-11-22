


const { config } = require('dotenv');
const mongoose = require('mongoose');

const mongoURI = config().parsed.MONGODB_URL

const connectDb = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
    }
  };
  


  
module.exports = { connectDb };
