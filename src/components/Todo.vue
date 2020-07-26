<template>
  <div class="todo">
    <p>{{ todo.title }}</p>
    <button @click="deleteTodo(todo.id)" class="del-btn">&#x2716;</button>
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
    ...mapMutations(["deleteTodo"])
  }
};
</script>

<style lang="scss" scoped>
.todo {
  transition: all 500ms;
  width: 100%;
  max-width: calc(500px - 32px);
  border: solid 1px #d9d9d9;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    position: relative;
    cursor: pointer;
    user-select: none;
    padding-right: 16px;

    &::after {
      position: absolute;
      content: "";
      height: 2px;
      width: 0px;
      background: rgba(#2c3e50, 0.5);
      transition: all 200ms;
      bottom: 10px;
      left: -5px;
    }
  }

  .is-completed::after {
    width: calc(100% + 10px);
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
