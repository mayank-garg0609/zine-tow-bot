const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(express.static('public'));
app.use(express.json()); 
 
// mongodb+srv://mayankgarg0609:vXDiD7AWyNO0G4pR@cluster0.aqahe.mongodb.net/
// mongodb://127.0.0.1:27017/tugOfWar

mongoose.connect("mongodb+srv://mayankgarg0609:vXDiD7AWyNO0G4pR@cluster0.aqahe.mongodb.net/").then(() => {
    console.log("Connected to MongoDB");
}).catch((e) => {
    console.log("Error connecting to MongoDB:", e);
});

// Define counta and countb as separate fields
const schema = new mongoose.Schema({
    counta: { type: Number, default: 0 },
    countb: { type: Number, default: 0 }
});
const Count = mongoose.model("Count", schema);
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
})
app.get("/teama", (req, res) => {
    res.sendFile(path.resolve('public/teama.html'));
});

app.get("/teamb", (req, res) => {
    res.sendFile(path.resolve('public/teamb.html'));
});


async function clickA(clicks) {
    try {
        let count = await Count.findOne();
        if (!count) {
            count = new Count();
        }
        count.counta = requestBody ;  // Update counta directly
        await count.save();
        res.json(count);
    } catch (error) {
        res.status(500).send("Server Error");
    }
}
app.post('/clickA', async(req,res) => {

console.log("Request:");
console.log(req.body);
// reqBody = JSON.parse(req.body);

clicks = parseInt(req.body.clicks);
    try {
        let count = await Count.findOne();
        if (!count) {
            count = new Count();
        }
        count.counta = clicks ;  // Update counta directly
        await count.save();

        console.log(`Saving ${clicks}`);
        res.json(count);
    } catch (error) {
        console.log(error);
        console.log("SErver Error");
        res.status(500).send("Server Error");
    }


});
app.post("/clickeda", async (req, res) => {
    console.log("Button A clicked");
    try {
        let count = await Count.findOne();
        if (!count) {
            count = new Count();
        }
        count.counta++;  // Update counta directly
        await count.save();
        res.json(count);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

app.post("/clickedb", async (req, res) => {
    console.log("Button B clicked");
    try {
        let count = await Count.findOne();
        if (!count) {
            count = new Count();
        }
        count.countb++;  
        await count.save();
        // console.log(res);
        res.json(count);
    } catch (error) {
        res.status(500).send("Server Error");
    }
});


app.get("/count", async (req, res) => {
    try {
        const count = await Count.findOne();
        res.json(count);  // Return the count object
    } catch (error) {
        res.status(500).send("Server Error");
    }
});

app.listen(3002, () => {
    console.log("Server started on port 3002");
});
        // app.post("/reset", async(req,res)=>{
        //     try{
        //         let count = await Count.findOne();
        //         if(count){
        //             count.counta = 0;
        //             count.countb = 0;
        //             await count.save();
        //             res.json(count);
        //         }} catch (error){
        //             res.status(500).send("Server Error");
        //         }
        // });