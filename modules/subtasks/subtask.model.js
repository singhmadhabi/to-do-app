const { Schema, model } = require("mongoose");
const subtaskSchema = new Schema({
  title: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    require: true,
    default: "pending",
  },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model("Todo", subtaskSchema);
