import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    image: {
        data:Buffer,
        contentType:String,
    }
})

const Image = mongoose.model("ImageSchema", imageSchema)

export default Image;