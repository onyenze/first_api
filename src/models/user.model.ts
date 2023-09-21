import mongoose from "mongoose";
import bcrypt from "bcrypt"

export interface userDocument extends mongoose.Document {
    email:string
    password:string
    name:string
    createdAt:Date
    updatedAt:Date
    comparePassword(userPassword:string): Promise<Boolean>
}

const userschema = new mongoose.Schema({
    email:{
        type:String,
        required :[ true,"email is required"],
        unique : true
    },
    name:{
        type:String,
        required :[ true,"name is required"]
    },
    password : {
        type:String,
        required :[ true,"password is required"]
    }
}, {timestamps:true})

userschema.pre("save", async function (next){
    let user = this as userDocument
    if(user.isModified('password')){
        return next()
    } else {
        const salt  =  await bcrypt.genSalt(10)
        const hash = await bcrypt.hashSync(user.password,salt) 
        user.password = hash
        return next()
    }
})


userschema.methods.comparePassword = async function(userPassword:string) :Promise<Boolean>{
    let user = this as userDocument
   return await bcrypt.compare(user.password, userPassword).catch((error) => false)
}

 const userModel = mongoose.model("Users", userschema)
 
 
export default userModel;