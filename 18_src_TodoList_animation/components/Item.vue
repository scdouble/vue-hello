<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo)"
        ref="inputTitle"
      />
    </label>

    <button class="btn-danger" @click="handleDelete(todo.id)">Delete</button>
    <button class="btn-edit" @click="handleEdit(todo)">Edit</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Item",
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    handleCheck(id) {
      //AppVueで作成したidと対応するTodoのDone値を反転する
      this.checkTodo(id);
    },
    handleEdit(todo) {
      console.log(todo);
      todo.isEdit = true;

      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });

      // this.$set(todo, "isEdit", true);
    },
    handleBlur(todo) {
      console.log(todo);
      todo.isEdit = false;
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
  margin-top: 3px;
}
li:hover {
  background-color: lightgray;
}
li:hover button {
  display: block;
}
</style>