const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createActivity, getActivity, deleteActivity } = require("./controllers/activityControllers");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8010;

const MONGODB_URL = "mongodb://localhost:27017/toDoAppDB";

mongoose.connect(MONGODB_URL).then(() => {
    console.log("Database Successfully Connected");
},
    (err) => {
        console.log("Connection Failed  ", err);
    });

app.post("/", createActivity);
app.get("/", getActivity);
app.delete("/:id", deleteActivity);

app.listen(PORT, () => {;
    console.log("Server is running on port: ", PORT);
});