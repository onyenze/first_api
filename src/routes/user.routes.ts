import { Request,Response,Express } from "express";
import { signup } from "../controllers/user.controller";
import { userSchema } from "../schemas/user.schema";
import validate from "../middlewares/validate";


const route = (app:Express)=>{
    app.post("api/signup",validate(userSchema),signup)
}

export default route