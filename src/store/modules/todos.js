import axios from "axios";

const state = {
  todos: [],
  number: "10"
};

const getters = {
  allTodos: state => state.todos,
  number: state => state.number
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${state.number}`
    );

    commit("setTodos", response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  deleteTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  addTodo: (state, newTodo) => (state.todos = [newTodo, ...state.todos]),
  setNumber: (state, number) => (state.number = number)
};

export default {
  state,
  getters,
  actions,
  mutations
};
