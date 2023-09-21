// Import the config
import config from './config/config';

// Import Mongoose
import mongoose from 'mongoose';



mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });