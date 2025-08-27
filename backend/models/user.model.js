import { model, Schema } from "mongoose";

const userSchema = new Schema({
    firstName: {type:String, require:true},
    lastName: String,
    email: {type:String, require:true}
})

const User = model("User", userSchema)
export default User