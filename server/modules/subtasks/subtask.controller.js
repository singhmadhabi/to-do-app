const Model = require("./subtask.model");
const TodoModel = require("../todos/todo.model");

const create = async (payload) => {
  return await Model.create(payload);
};

const updateStatus = async (id, status) => {
  const subtask = await Model.findOne({ _id: id });
  if (status.status === "pending") {
    await TodoModel.findOneAndUpdate(
      { _id: subtask?.todo },
      { status: "pending" },
      { new: true }
    );
  }
  return await Model.findOneAndUpdate({ _id: id }, status, { new: true });
};

const removeById = async (id) => {
  return await Model.deleteOne({ _id: id });
};

module.exports = { create, removeById, updateStatus };
