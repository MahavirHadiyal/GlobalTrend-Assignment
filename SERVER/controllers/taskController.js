

import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch {
    res.json({ message: "Failed to fetch tasks" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      userId: req.userId
    });

    res.json(task);
  } catch {
    res.json({ message: "Failed to create task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);
  } catch {
    res.json({ message: "Failed to update task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch {
    res.json({ message: "Failed to delete task" });
  }
};
