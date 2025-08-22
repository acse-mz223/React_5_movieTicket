import { model, Schema } from "mongoose";

const seatmaSchema = new Schema({
    Screen: Number,
    seatmap: [seatSchema]   
})

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

const Seatmap = model("Seatmap", seatSchema)
export default Seatmap
