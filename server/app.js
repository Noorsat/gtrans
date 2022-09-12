const express = require("express")
const mongoose = require("mongoose")

const PORT = 3000;

const app = express(5000, () => console.log("App has been started on port " + PORT))

async function start(){
    try{
        await mongoose.connect("mongodb+srv://user:qwerty123@cluster0.bfy5yoo.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }).then(() => app.listen(5000, () => console.log("SErver launched")))
    }catch(e){
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()


