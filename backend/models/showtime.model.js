import { model, Schema } from "mongoose";


const showtimeSchema = new Schema({
    filmid: { type:Schema.Types.ObjectId, ref:"Film"},
    screen: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    bookedseat: [String] 
}, { timestamps: true })

const Showtime = model("Showtime", showtimeSchema)
export default Showtime

