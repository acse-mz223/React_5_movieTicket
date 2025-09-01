import { model, Schema } from "mongoose";

const userSchema = new Schema({
    clerkid: {type: String, required:true, unique:true},
    ticket: [{type: Schema.Types.ObjectId, ref:"Ticket"}]
})

const User = model("User", userSchema)
export default User