<template>
  <div>
    <b-form inline>
      <b-form-input
        type="text"
        placeholder="Add task"
        required
        class="mr-3"
      ></b-form-input>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-list-group class="mt-5">
      <b-list-group-item
        v-for="todo in allTodos"
        :key="todo.id"
      >
        {{todo.title}}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodoList',
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
};
</script>
