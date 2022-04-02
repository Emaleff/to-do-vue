<template>
  <div class="to-do__item">
    <label class="label">
      <input
        type="checkbox"
        id="checkbox"
        :checked="task.completed"
        @change="changeCompletedTask(task.id)"
      />
      <span class="checkbox"></span>
      <div class="to-do__item-text" :class="{ complete: task.completed }">
        {{ task.text }}
      </div>
    </label>
    <img
      src="../assets/close.svg"
      alt=""
      class="to-do__item-delete"
      @click="deleteTaskInStore(task.id)"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ToDoItem",
  props: {
    task: {
      required: true,
      type: Object,
    },
  },
  methods: {
    ...mapActions(["deleteTask", "changeCompletedTask"]),
    deleteTaskInStore(id) {
      this.deleteTask(id);
    },
    changeComplete(id) {
      this.changeCompletedTask(id);
    },
  },
};
</script>

<style scoped>
.to-do__item {
  border-bottom: 1px solid gray;
  padding: 10px;
  position: relative;
  min-height: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.to-do__item-text {
  margin-left: 40px;
  margin-right: 40px;
  word-wrap: break-word;
}
.to-do__item-text.complete {
  color: gray;
  text-decoration: line-through;
}
.label {
  display: block;
  cursor: pointer;
  font-size: 18px;
}

/* Скрываем input[checkbox] */
.label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Кастомный чекбокс */
.checkbox {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  height: 24px;
  width: 24px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #e3e4f1;
}

/* Нажатый чекбокс */
.label input:checked + .checkbox {
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
}

/* Создание галочки чекбокса */
.checkbox:after {
  content: url(../assets/yes.svg);
  /* position: static; */
  display: none;
}

.label input:checked + .checkbox:after {
  display: flex;
  justify-content: center;
  align-items: center;
}
.to-do__item-delete {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
}
.to-do__item-delete:hover {
  cursor: pointer;
}
</style>
