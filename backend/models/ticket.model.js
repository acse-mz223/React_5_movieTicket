import { model, Schema } from "mongoose";

const ticketSchema = new Schema({
    showtime: {type:Schema.Types.ObjectId, required:true, ref:"Showtime"},
    seat: [String],
    user: {type:Schema.Types.ObjectId,  ref:"User"}
})

const Ticket = model("Ticket", ticketSchema)
export default Ticket