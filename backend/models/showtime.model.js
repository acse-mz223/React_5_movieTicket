import { model, Schema } from "mongoose";

const seatSchema = new Schema({
  id: { type: String, required: true },   // e.g. "A1"
  status: { 
    type: String, 
    enum: ["available", "booked", "none"], 
    default: "available" 
  },
  type: { 
    type: String, 
    enum: ["wheelchair", "super_saver", "saver", "regular", "vip", "standard"], 
    default: "standard" 
  },
  price: { type: Number, required: false } // price for that seat type
});

const showtimeSchema = new Schema({
    date: [{
        type: Schema.Types.ObjectId,
        ref: "Date"
    }],
    row: Number,
    col: Number,
    screen: Number,
    date: String,
    time: String,
    seat: {
        type: Map,   
        of: [seatSchema]
  }
}, { timestamps: true })

const Showtime = model("Showtime", showtimeSchema)
export default Showtime

