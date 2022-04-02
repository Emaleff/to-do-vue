<template>
  <div class="to-do__list">
    <ToDoItem v-for="task in getSelectedTodo" :key="task.id" :task="task" />
    <ToDoPanel />
  </div>
</template>

<script>
import ToDoPanel from "../components/ToDoPanel";
import ToDoItem from "../components/ToDoItem";
import { mapGetters } from "vuex";
export default {
  name: "ToDoList",
  computed: {
    ...mapGetters(["getSelectedTodo"]),
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
</style>
