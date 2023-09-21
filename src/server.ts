// Import the config
import config from './config/config';

// Import Mongoose
import mongoose from 'mongoose';
import express, {Request, Response, urlencoded} from "express";
import bodyParser from "body-parser";
// import routes from "./routers/users";

const port = 5000
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
  res.send("Welcome aboard.")
})

app.listen(port, async()=>{
  console.log(`Listening to port: ${port}`);
//   routes(app);
});



mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


