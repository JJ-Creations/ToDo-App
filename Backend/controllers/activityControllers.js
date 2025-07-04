const taskModel = require("../model/activity");
const createActivity = async (req, res) => {
    const body = {
        task_id: req.body.task_id,
        task_name: req.body.task_name
    };
    taskModel.insertOne(body);
    console.log("New Task Added :",body);
    res.status(200).json({
        id: body.task_id
    });
}
const getActivity = async (_req, res) => {
    const activityList = await taskModel.find();
    res.status(200).json(activityList);
}
const deleteActivity = async (req, res) => {
    const task = await taskModel.findOne({ task_id: req.params.id });
    console.log("Completed Task :", task);
    await taskModel.findOneAndDelete({ task_id: req.params.id });
    console.log("Deleted Successfully")
    res.status(200).json({
        message: "Deleted Successfully"
    });
}
module.exports = { createActivity, getActivity, deleteActivity }