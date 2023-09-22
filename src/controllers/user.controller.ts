import {Request,Response} from "express"
import { Document } from "mongoose"
import userModel ,{userDocument} from "../models/user.model"
import { userInput } from "../schemas/user.schema"


export const signup = async(req:Request<{}, userInput["body"]>,res:Response)=>{
    try {
        const created = async(input: Document<Omit<userDocument, "createdAt" | "updatedAt" | "confirmPassword" >>)=>{
            return await userModel.create(input)
        }
        const user = await created(req.body)
        res.status(201).json({
            data:user
        })
    } catch (error:any) {
        return res.status(409).json({
            message: error.message
          })
    }
}