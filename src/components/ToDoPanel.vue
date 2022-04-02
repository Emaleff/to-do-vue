<template>
  <div class="to-do__panel">
    <div class="to-do__counter">
      {{ getNotCompletedCountTasks }}
      items left
    </div>
    <div class="to-do__actions">
      <button
        class="to-do__action"
        @click="$store.commit('changeTypeRenderTodo', 'all')"
      >
        All
      </button>
      <button
        class="to-do__action"
        @click="$store.commit('changeTypeRenderTodo', 'active')"
      >
        Active
      </button>
      <button
        class="to-do__action"
        @click="$store.commit('changeTypeRenderTodo', 'completed')"
      >
        Completed
      </button>
    </div>
    <button
      class="to-do__action"
      @click="clearCompleted"
      v-if="getCompletedTasks"
    >
      Clear Completed
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ToDoPanel",
  computed: {
    ...mapGetters([
      "getNotCompletedCountTasks",
      "getTasks",
      "getCompletedTasks",
    ]),
  },
  methods: {
    ...mapActions(["clearCompleted"]),
  },
};
</script>

<style scoped>
.to-do__panel {
  display: flex;
  align-items: center;
  padding: 20px;
}
.to-do__actions {
  margin: 0 55px;
}
.to-do__action {
  margin: 0 5px;
  background: transparent;
  border: 0;
  outline: 0;
}
.to-do__action:hover {
  cursor: pointer;
}
@media screen and (max-width: 570px) {
  .to-do__panel {
    flex-direction: column;
  }
  .to-do__action {
    margin: 10px 0;
  }
}
@media screen and (max-width: 350px) {
  .to-do__actions {
    display: flex;
    flex-direction: column;
  }
}
</style>
