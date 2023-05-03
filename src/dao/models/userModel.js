import mongoose from "mongoose";

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    first_name: {type:String, required:false},
    last_name:{type:String, required:false},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:false}
},{versionKey:false})

export const userModel = mongoose.model(userCollection,userSchema)