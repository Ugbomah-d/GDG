const mongoose = require("mongoose");

// This is the schema to define what the database would hold on the remote servers
const todoListSchema = mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: String, required: true },
  updatedAt: { type: String, rquired: true },
  deletedAt: { type: String },
  isDone: { type: Boolean, required: true, default: false },
});

//This is to internally create the model instance 
const todoModel = mongoose.model("Todo", todoListSchema);

module.exports = todoModel;