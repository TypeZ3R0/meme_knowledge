// Importing dependencies
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to meme website")
})

// Listening to PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
})