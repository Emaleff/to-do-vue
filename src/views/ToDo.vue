<template>
  <div class="to-do__container">
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<script>
import ToDoInput from "../components/ToDoInput.vue";
import ToDoList from "../components/ToDoList.vue";
export default {
  components: { ToDoInput, ToDoList },
};
</script>

<style scoped>
.to-do__container {
  width: 540px;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (max-width: 560px) {
  .to-do__container {
    width: 95%;
  }
}
</style>
