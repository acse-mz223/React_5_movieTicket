import { model, Schema } from "mongoose";

const seatSchema = new Schema({
  row: { type: String, required: true },   // e.g. "A"
  number: { type: Number, required: true }, // e.g. 1
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

const seatmapSchema = new Schema({
    number:  {type: Number, required: true},
    capacity: Number,
    col: {type: Number, required: true},
    row: {type: Number, required: true},
    seatmap: [seatSchema]  
})

const Seatmap = model("Seatmap", seatmapSchema)
export default Seatmap
