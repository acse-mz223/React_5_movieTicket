import { model, Schema } from "mongoose";

const dateSchema = new Schema({
    date: { type: String, required: true },
    showtime: [{
        type: Schema.Types.ObjectId,
        ref: "Showtime"
    }]
}, {timestamps: true})


const filmShcema = new Schema({
    filmid: { type: Number, required: true, unique: true},
    title: { type: String, required: true },
    intro: String,
    release: String,
    genres: [{
        id: Number,
        name: String
    }],
    horizontalPostURL: { type: String, required: true },
    verticalPostURL: { type: String, required: true },
    duration: Number,
    cast: [String],
    date: [dateSchema]
}, {timestamps: true})

const Film = model("Film", filmShcema)
export default Film