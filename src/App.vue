<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
import { mapActions } from "vuex";
export default {
  created() {
    this.checkTasks();
  },
  components: { Header },
  methods: {
    ...mapActions(["checkTasks"]),
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
