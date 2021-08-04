<template>
  <MyHeader :addTodo="addTodo" />
  <List :checkTodo="checkTodo" v-bind:todos="todos" :deleteTodo="deleteTodo" />
  <MyFooter
    :todos="todos"
    :checkAllTodo="checkAllTodo"
    :clearAllDoneTodo="clearAllDoneTodo"
  />
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: { List, MyFooter, MyHeader },
  data() {
    return {
      todos: [
        {
          id: "001",
          title: "eat",
          done: true,
        },
        {
          id: "002",
          title: "sleep",
          done: false,
        },
        {
          id: "003",
          title: "smoke",
          done: true,
        },
      ],
    };
  },
  methods: {
    //Todoを追加する
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
      // console.log("App Conmpnent, received", x);
    },
    //check unchecked todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    //todoを削除する
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    //すべてのTodoをCheckもしくはUncheckする
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    //完了のTodoをリストから削除する
    clearAllDoneTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style >
</style>