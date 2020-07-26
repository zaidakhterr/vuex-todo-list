<template>
  <div id="app">
    <h1>TodoList</h1>
    <AddTodo />
    <FilterTodo />
    <div class="legend">
      <p class="completed">Completed</p>
      <p class="not-completed">Not Completed</p>
    </div>
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodo
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

.legend {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;

  p {
    position: relative;
    margin-left: 32px;
    margin-right: 24px;

    &::before {
      content: " ";
      height: 16px;
      width: 24px;
      border: 1px solid #2c3e50;
      position: absolute;
      left: -28px;
      top: 2px;
      border-radius: 3px;
    }

    &.completed::before {
      background-color: #42b983;
    }

    &.not-completed::before {
      background-color: #2c3e50;
    }
  }
}
</style>
