//const { model } = require("mongoose");
const model = require("./todo.model");
const SubtaskModel = require("../subtasks/subtask.model");
const { update } = require("../subtasks/subtask.controller");

//CRUD

const create = async (payload) => {
  if (!payload) throw new Error("Must send some Payload");
  return await model.create(payload);
};

const list = async () => {
  return await model.find();
};

const getById = async (id) => {
  return await model.findOne({ _id: id });
};

const updateById = async (id) => {
  return await model.findOneAndUpdate({ _id: id }, payload, { new: true });
};

const updateStatus = async (id, payload) => {
  const { status } = payload;
  if (!status) throw new Error("status is required");
  return await model.findOneAndUpdate({ _id: id }, { status }, { new: true });
};

const removeById = async (id) => {
  return await model.deleteOne({ _id: id });
};

model.exports = {
  create,
  list,
  getById,
  updateById,
  updateStatus,
  removeById,
};
