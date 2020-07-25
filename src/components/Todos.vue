<template>
  <div class="todo-list">
    <transition-group name="list" tag="div">
      <Todo v-for="todo of allTodos" :key="todo.id" :todo="todo" />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from "./Todo";

export default {
  name: "Todos",
  components: {
    Todo
  },
  methods: {
    ...mapActions(["fetchTodos"])
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  width: 100%;
  max-width: 500px;
  margin: 32px auto;

  > div {
    width: 100%;
    padding: 16px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 500ms;
}

.list-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.list-leave-active {
  position: absolute;
}
</style>
