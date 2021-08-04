<template>
  <div>
    <ul>
      <Item
        v-for="todoObj in todos"
        :key="todoObj.id"
        :todo="todoObj"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
export default {
  name: "List",
  components: { Item },
  props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style>
</style>