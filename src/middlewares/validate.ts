import { AnyZodObject } from "zod";
import { Request,Response,NextFunction } from "express";

const validate = (schema:AnyZodObject)=>(req: Request,res: Response ,next: NextFunction)=>{
    try {
        schema.parse({
            body:req.body,
            query:req.query,
            params:req.params
        })
        next()
    } catch (error:any) {
        return res.status(400).json({
            message: error.error
          })
    }
}

export default validate