const listsModel = require("../models/listsModel");

const listsController = {
  index: (req, res) => {
    const lists = listsModel.getAllLists();
    res.render("lists", { lists });
  },
  new: (req, res) => {
    res.render("newToDoListForm");
  },
  save: (req, res) => {
    const { toDoName } = req.body;
    const list = listsModel.create(toDoName);
    listsModel.save(list);
    res.redirect("/app");
  },
  show: (req, res) => {
    const id = req.params.id;
    const list = listsModel.getListById(id);
    res.render("tasks", { list });
  },
  delete: (req, res) => {
    const id = req.params.id;
    listsModel.deleteList(id);
    res.redirect("/app");
  },
};

module.exports = listsController;
