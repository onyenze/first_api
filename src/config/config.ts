import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config


export default {
    // MongoDB connection options
    mongoURI: `mongodb+srv://chibuezeonyenze123:UMFsay5MGcmoqlBp@cluster0.scljp5s.mongodb.net/`, 
    mongoOptions: {
        useNewUrlParser: true, // Use the new URL parser
        useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
        useCreateIndex: true, // Create indexes for better query performance
        useFindAndModify: false, // Disable deprecated methods
      },
    }




