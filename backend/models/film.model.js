import { model, Schema } from "mongoose";

const dateSchema = new Schema({
    date: String,
    showtime: [{
        type: Schema.Types.ObjectId,
        ref: "Showtime"
    }]
}, {timestamps: true})


const filmShcema = new Schema({
    title: String,
    intro: String,
    horizontalPostURL: String,
    verticalPostURL: String,
    duration: Number,
    cast: [String],
    date: [dateSchema]
}, {timestamps: true})

const Film = model("Film", filmShcema)
export default Film