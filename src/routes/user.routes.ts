import { Request,Response,Express } from "express";
import { signup } from "../controllers/user.controller";
import { userSchema } from "../schemas/user.schema";
import validate from "../middlewares/validate";


const routes = (app:Express)=>{
    app.get("/welcome", (req:Request, res: Response)=>{
        res.send("Welcome Onboard.")
      });

    app.post("/api/signup",validate(userSchema),signup)
}

export default routes