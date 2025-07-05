const taskModel = require("../model/activity");
const createActivity = async (req, res) => {
    const body = {
        task_id: req.body.task_id,
        task_name: req.body.task_name
    };

    try {
        await taskModel.create(body); // ✅ Corrected line
        console.log("✅ New Task Added:", body);
        res.status(200).json({ id: body.task_id });
    } catch (err) {
        console.error("❌ Error adding task:", err);
        res.status(500).json({ message: "Failed to add task" });
    }
};

const getActivity = async (_req, res) => {
    const activityList = await taskModel.find();
    res.status(200).json(activityList);
}
const deleteActivity = async (req, res) => {
    try {
        const task = await taskModel.findOne({ task_id: req.params.id });
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        console.log("🗑️ Completed Task:", task);
        await taskModel.findOneAndDelete({ task_id: req.params.id });
        res.status(200).json({ message: "Deleted Successfully" });

    } catch (err) {
        console.error("❌ Error deleting task:", err);
        res.status(500).json({ message: "Failed to delete task" });
    }
};

module.exports = { createActivity, getActivity, deleteActivity }