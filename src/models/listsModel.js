let lists = [
  {
    id: "1",
    name: "Tarefas domésticas",
    tasks: [
      {
        id: "1",
        name: "Lavar o banheiro",
        isCompleted: false,
      },
      {
        id: "2",
        name: "Lavar a cozinha",
        isCompleted: true,
      },
      {
        id: "3",
        name: "Lavar o porão",
        isCompleted: false,
      },
    ],
  },
  {
    id: "2",
    name: "Estudos",
    tasks: [],
  },
  {
    id: "3",
    name: "Tarefas no trabalho",
    tasks: [],
  },
];

const listsModel = {
  getAllLists: () => lists,
  create: (name) => {
    const taskList = {
      name,
      id: Date.now().toString(),
      tasks: [],
    };

    return taskList;
  },
  getListById: (id) => {
    const list = lists.find((item) => item.id === id);

    return list;
  },
  save: (taskList) => {
    lists.push(taskList);
  },
  addTask(listId, taskName) {
    const list = this.getListById(listId);
    const task = {
      name: taskName,
      id: Date.now().toString(),
      isCompleted: false,
    };
    list.tasks.push(task);
  },
  markTaskAsCompleted(listId, taskId) {
    const list = this.getListById(listId);
    const task = list.tasks.find((item) => item.id === taskId);

    task.isCompleted = true;
  },
  deleteTask(listId, taskId) {
    let list = this.getListById(listId);
    list.tasks = list.tasks.filter((task) => task.id !== taskId);
  },
  deleteList: (id) => {
    lists = lists.filter((list) => list.id !== id);
  },
};

module.exports = listsModel;
