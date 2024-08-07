import mongoose from "mongoose";
const Schema  = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    token:String
})

const model = mongoose.models.UserData || mongoose.model("UserData",Schema);

module.exports = model ;