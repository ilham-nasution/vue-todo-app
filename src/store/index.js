import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    setTodos: (state, todos) => {
      state.todos = todos;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', response.data);
    },
  },
});
