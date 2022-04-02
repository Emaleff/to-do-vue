export default {
  state() {
    return {
      tasks: null,
      typeRenderTodo: "all",
    };
  },
  getters: {
    getSelectedTodo(state) {
      if (state.typeRenderTodo === "active") {
        return state.tasks.filter((task) => !task.completed);
      } else if (state.typeRenderTodo === "completed") {
        return state.tasks.filter((task) => task.completed);
      } else {
        return state.tasks;
      }
    },
    getTasks(state) {
      return state.tasks;
    },
    getCompletedTasks(state) {
      if (state.tasks.filter((task) => task.completed).length) {
        return true;
      }
    },
    getNotCompletedCountTasks(state) {
      let count = 0;
      state.tasks.forEach((task) => {
        if (!task.completed) {
          count++;
        }
      });
      return count;
    },
  },
  actions: {
    checkTasks(ctx) {
      const tasksArray = [
        { id: "32", completed: true, text: "Какая то выполненная задача" },
        { id: "3123", completed: false, text: "Какая то невыполненная задача" },
      ];
      if (JSON.parse(localStorage.getItem("tasks"))) {
        ctx.commit("updateTasks", JSON.parse(localStorage.getItem("tasks")));
      } else {
        ctx.commit("updateTasks", tasksArray);
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
      }
    },
    addNewTask(ctx, text) {
      const newTask = {
        id: (Math.random() * 10000).toFixed(),
        completed: false,
        text: text,
      };
      ctx.commit("addTask", newTask);
      localStorage.setItem("tasks", JSON.stringify(this.getters.getTasks));
    },
    deleteTask(ctx, id) {
      const tasksArray = this.getters.getTasks;
      const newTasks = [];
      tasksArray.forEach((task) => {
        if (task.id !== id) {
          newTasks.push(task);
        }
      });

      ctx.commit("updateTasks", newTasks);
      localStorage.setItem("tasks", JSON.stringify(this.getters.getTasks));
    },
    clearCompleted(ctx) {
      const tasksArray = this.getters.getTasks;
      const newTasks = [];
      tasksArray.forEach((task) => {
        if (!task.completed) {
          newTasks.push(task);
        }
      });

      ctx.commit("updateTasks", newTasks);
      localStorage.setItem("tasks", JSON.stringify(this.getters.getTasks));
    },
    changeCompletedTask(ctx, id) {
      const tasksArray = this.getters.getTasks;
      const newTasks = [];
      tasksArray.forEach((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        newTasks.push(task);
      });

      ctx.commit("updateTasks", newTasks);
      localStorage.setItem("tasks", JSON.stringify(this.getters.getTasks));
    },
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, newTask) {
      state.tasks.push(newTask);
    },
    changeTypeRenderTodo(state, type) {
      state.typeRenderTodo = type;
    },
  },
};
