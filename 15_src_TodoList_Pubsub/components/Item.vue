<template>
  <div>
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <span>{{ todo.title }}</span>
      </label>

      <button @click="handleDelete(todo.id)">delete</button>
    </li>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    handleCheck(id) {
      //AppVUeで作成したidと対応するTodoのDone値を反転する
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm("Are you sure?")) {
        console.log(id);
        // this.deleteTodo(id);
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style>
li button {
  float: right;
  display: none;
}
li:hover {
  background-color: lightgray;
}
li:hover button {
  display: block;
}
</style>