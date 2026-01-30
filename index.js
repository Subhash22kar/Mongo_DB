const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Sample").then(()=>{
    console.log("Connected to MongoDB successfully");
    
}).catch((err)=>{
    console.log(err);
    
})

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student = new mongoose.model("Student", student)

const adder = async ()=>{

    const ss = await Student.find({height:{$in:[5,6]}})

    console.log(ss);
    
}
adder();