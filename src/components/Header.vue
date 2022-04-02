<template>
  <header>
    <div class="header__container">
      <img src="../assets/logo.png" alt="" class="header__logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header__container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px 0;
}
.header__logo {
  width: 135px;
}
@media screen and (max-width: 1130px) {
  .header__container {
    max-width: 95%;
  }
}
</style>
