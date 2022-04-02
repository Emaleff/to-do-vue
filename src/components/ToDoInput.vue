<template>
  <form @submit.prevent="addTask" class="to-do__form">
    <input
      type="text"
      class="to-do__input"
      placeholder="Create new todo..."
      v-model="inputData"
    />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ToDoInput",
  data() {
    return {
      inputData: null,
    };
  },
  methods: {
    ...mapActions(["addNewTask"]),
    addTask() {
      if (this.inputData) {
        this.addNewTask(this.inputData);
        this.inputData = null;
      }
    },
  },
};
</script>

<style scoped>
.to-do__form {
  width: 100%;
}
.to-do__input {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin: 30px auto;
  display: block;
  padding: 0 15px;
  outline: 0;
  border-radius: 4px;
  border: 1px solid gray;
}
</style>
