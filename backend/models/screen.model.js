import { model, Schema } from "mongoose";

const screenShema = new Schema({
    screen: {type:Number, required: true, unique: true},
    seatmap: { type:Schema.Types.ObjectId, ref:"Seatmap", required:true}
})

const Screen = model("Screen", screenShema)
export default Screen