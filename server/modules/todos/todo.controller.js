const Model = require("./todo.model");
const subtaskModel = require("../subtasks/subtask.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const list = async () => {
  return await Model.aggregate([
    {
      $lookup: {
        from: "subtasks",
        localField: "_id",
        foreignField: "todo",
        as: "subtasks",
      },
    },
    {
      $project: {
        subtasks: 1,
        title: 1,
        status: 1,
      },
    },
  ]);
};

const updateStatus = async (id, status) => {
  const allSubtasks = await subtaskModel.find({ todo: id });
  if (status.status === "completed") {
    allSubtasks.map(async (subtask) => {
      await subtaskModel.findOneAndUpdate(
        { _id: subtask._id },
        { status: "completed" },
        { new: true }
      );
    });
  }
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, list, removeById, updateStatus };
