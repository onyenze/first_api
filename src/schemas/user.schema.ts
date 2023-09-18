import {TypeOf, object, string} from "zod"

export const userSchema = object({
    name: string({
        required_error:"Name is required"
    }),
    email : string({
        required_error:"Email is required"
    }).email("Invalid email Error"),
    password: string({
        required_error:"Password is required"
    }).min(6,"Password is too short, must be a least 6 characters"),
    confirmPassword : string({
        required_error:"Confirm Password is required"
    })
}).refine((data)=> data.password === data.confirmPassword,{
    message:"Password and Confirm Password do not match",
    path : ["confirmPassword"]
})

export type userInput = Omit<TypeOf<typeof userSchema>, "body.confirmPassword">