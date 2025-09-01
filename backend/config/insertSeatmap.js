import fs from "fs"
import path from "path"
import Seatmap from "../models/seatmap.model.js"

const __dirname = path.resolve()  // get project path -> backend file

export async function insertSeatmap() {
    try{
        // delete all old data
        await Seatmap.deleteMany({})
        // read file
        const files = fs.readdirSync(__dirname + "/backend/data").filter((item) => item.endsWith(".js"))
        for (const file of files) {
            // insert
            const {default: seatmap} = await import('file://' + __dirname + "/backend/data/" + file)
            const result = new Seatmap(seatmap)
            await result.save()
        }

        console.log("insert all seatmap successfully!")
    }catch(error){
        console.log("insert all seatmap failed:", error)
    }
}