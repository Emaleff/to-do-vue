<template>
  <div class="to-do__list" v-if="getTasks.length > 0">
    <ToDoItem v-for="task in getSelectedTodo" :key="task.id" :task="task" />
    <ToDoPanel />
  </div>
  <h1 v-else class="to-do__title">Список задач пуст, добавьте задачу</h1>
</template>

<script>
import ToDoPanel from "../components/ToDoPanel";
import ToDoItem from "../components/ToDoItem";
import { mapGetters } from "vuex";
export default {
  name: "ToDoList",
  computed: {
    ...mapGetters(["getSelectedTodo", "getTasks"]),
  },
  components: {
    ToDoPanel,
    ToDoItem,
  },
};
</script>

<style scoped>
.to-do__list {
  width: 100%;
  border: 1px solid gray;
  margin: 0 auto 50px;
  border-radius: 5px;
}
.to-do__title {
  margin: 20px;
  text-align: center;
}
</style>
