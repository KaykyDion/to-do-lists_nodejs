const express = require("express");
const listsController = require("./controllers/listsController");
const toDoListController = require("./controllers/toDoListController");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/app", listsController.index);
router.get("/app/newToDoList", listsController.new);
router.post("/app/create", listsController.save);
router.post("/app/delete/:id", listsController.delete);

router.get("/app/:id", toDoListController.index);
router.post("/app/:id/newTask", toDoListController.newTask);
router.post("/app/:listId/delete/:taskId", toDoListController.deleteTask);
router.post("/app/:listId/:taskId", toDoListController.completeTask);

module.exports = router;
