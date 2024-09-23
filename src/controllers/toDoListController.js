const listsModel = require("../models/listsModel");

const toDoListController = {
  index: (req, res) => {
    const id = req.params.id;
    const list = listsModel.getListById(id);
    res.render("tasks", { list });
  },
  newTask: (req, res) => {
    const id = req.params.id;
    const name = req.body.taskName;
    const list = listsModel.getListById(id);
    listsModel.addTask(id, name);
    res.redirect(`/app/${id}`);
  },
  completeTask: (req, res) => {
    const { listId, taskId } = req.params;
    listsModel.markTaskAsCompleted(listId, taskId);
    res.redirect(`/app/${listId}`);
  },
};

module.exports = toDoListController;
