<template>
  <div>
    <label for="filter">Filter</label>
    <select @change="changeNumber" name="filter" v-model="number">
      <option>5</option>
      <option>10</option>
      <option>20</option>
      <option>40</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "FilterTodo",
  computed: {
    ...mapGetters(["number"])
  },
  methods: {
    ...mapMutations(["setNumber"]),
    ...mapActions(["fetchTodos"]),
    changeNumber(e) {
      this.setNumber(e.target.value);
      this.fetchTodos();
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  max-width: 500px;
  margin: 0 auto 32px;
  padding: 0 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  label {
    margin-right: 8px;
  }

  select {
    font-size: 1.1rem;
    outline: none;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    line-height: 0px;
  }
}
</style>
