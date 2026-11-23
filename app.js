const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then( () => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req, res) => {
    res.send("Hi, I am root");
} );

app.get("/listings", async (req, res) => {
    await Listing.find({});
    res.render("index.ejs", {allListings});
});

// app.get("/testListing", async(req, res) => {
//     try {
//         const sampleListing = new Listing({
//         title: "My New Village",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// }   catch (err) {
//     console.log(err);
//     res.status(500).send("Could not save listing");
// }
// });



app.listen(8080, () => {
    console.log("server is listening to port 8080");
});