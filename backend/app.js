import express from "express";
import cors from "cors";
import Demo from "./models/demo.model.js";



const app = express()
app.use(cors({
    origin: "http://16.171.253.208", // Change this to your frontend IP
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(express.json())

app.get("/", (req, res) => {
    res.send({ "message": "Server is running on port " })
})

app.post("/app", async (req, res) => {
    try {
        const { demo } = req.body;
        const newDemo = new Demo
        await newDemo.save();
        res.status(200).json({ message: demo })
    } catch (error) {
        res.json({ error: error.message })
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

//s