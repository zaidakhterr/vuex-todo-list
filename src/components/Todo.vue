<template>
  <div class="todo" :class="{ 'is-completed': todo.completed }">
    <p @dblclick="toggleTodo">{{ todo.title }}</p>
    <button class="del-btn" @click="deleteTodo(todo.id)">&#x2716;</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Todos",
  props: {
    todo: Object
  },
  methods: {
    ...mapMutations(["deleteTodo"]),
    toggleTodo() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style lang="scss" scoped>
.todo {
  transition: all 500ms;
  width: 100%;
  max-width: calc(500px - 32px);
  border: solid 1px #2c3e50;
  color: #fff;
  background-color: #2c3e50;
  border-radius: 3px;
  margin-bottom: 16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.is-completed {
    background-color: #42b983;
    border-color: #2c3e50;
  }

  p {
    position: relative;
    cursor: pointer;
    user-select: none;
    padding-right: 16px;
    width: 100%;
  }

  .del-btn {
    cursor: pointer;
    height: 24px;
    width: 24px;
    min-width: 24px;
    padding: 0 6px;
    text-align: center;
    color: #fff;
    background-color: #e04545;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all 200ms;
    outline: none;

    &:hover {
      border-color: #000;
    }
  }
}
</style>
