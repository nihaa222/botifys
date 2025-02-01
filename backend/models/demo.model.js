import mongoose from "mongoose";


const demoSchema = new mongoose.Schema({
    demo: {type:String}
})

const Demo = mongoose.model("Demo", demoSchema)
export default Demo