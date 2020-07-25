<template>
  <div id="app">
    <h1>TodoList</h1>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Todos
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Source Code Pro", sans-serif;
  border-radius: 0;
}

body {
  width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  background: rgba(#42b983, 0.1);
}

h1 {
  width: 100%;
  font-size: calc(2.2rem + 1vw);
  margin: 32px 0;
  text-align: center;
  color: #2c3e50;
}
</style>
