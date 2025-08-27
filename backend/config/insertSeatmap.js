import seatmap1 from "../data/seatmap1.js"
import Seatmap from "../models/seatmap.model.js"

export async function insertSeatmap() {
    try{
        // delete all old data
        await Seatmap.deleteMany({})
        // insert
        const result = new Seatmap(seatmap1)
        result.save()
        console.log("insert all seatmap successfully!")
    }catch(error){
        console.log("insert all seatmap failed:", error)
    }
}