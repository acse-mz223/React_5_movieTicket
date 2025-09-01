import { model, Schema } from "mongoose";

const globalSchema = new Schema({
    key: String,  // hero
    value: Number
})

const Global = model("Global", globalSchema)
export default Global