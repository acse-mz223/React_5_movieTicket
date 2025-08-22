import { model, Schema } from "mongoose";


const showtimeSchema = new Schema({
    filmid: { type: Number, required: true },
    screen: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    row: { type: Number, required: true, default:32 },
    col: { type: Number, required: true, default:16 },
    bookedseat: [String] 
}, { timestamps: true })

const Showtime = model("Showtime", showtimeSchema)
export default Showtime

