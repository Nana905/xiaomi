<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import storage from "./storage";
export default {
  data() {},
  mounted() {
    storage.setItem("a", 1);
  },
};
</script>

<style lang="scss">
</style>
