const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { createActivity, getActivity, deleteActivity } = require("./controllers/activityControllers");
const app = express();
app.use(express.json());

app.use(cors({
  origin: "https://todoappjino.netlify.app",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
const PORT = process.env.PORT || 8010;
app.listen(PORT, () => console.log("Server running on", PORT));

const MONGODB_URL =process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
});


app.post("/", createActivity);
app.get("/", getActivity);
app.delete("/:id", deleteActivity);
