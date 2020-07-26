<template>
  <form>
    <input type="text" autocomplete="off" name="title" v-model.trim="title" />
    <button type="submit">Add Item</button>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
form {
  max-width: 500px;
  margin: 0 auto 32px;
  padding: 16px;
  display: flex;

  input {
    font-size: 1.1rem;
    outline: none;
    border-radius: 3px;
    border: 1px solid #d9d9d9;
    padding: 8px 16px;
    line-height: 0px;
    flex: 1;
    margin-right: 8px;
  }

  button {
    cursor: pointer;
    outline: none;
    color: #fff;
    background: #42b983;
    border: 1px solid #d9d9d9;
    padding: 8px;
    border-radius: 3px;
  }
}
</style>
