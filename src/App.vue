<template>
  <div class="container my-5">
    <TodoList/>
  </div>
</template>

<script>
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import TodoList from './components/TodoList.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export default {
  name: 'App',
  components: {
    TodoList,
  },
};
</script>
