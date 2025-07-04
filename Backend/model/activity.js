const mongoose = require("mongoose");

const activity = new mongoose.Schema({
    task_id: {
        type: Number,
        required: true
    },
    task_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Activity", activity)