<template>
  <MyHeader @addTodo="addTodo" />
  <List :checkTodo="checkTodo" v-bind:todos="todos" :deleteTodo="deleteTodo" />
  <MyFooter
    :todos="todos"
    @checkAllTodo="checkAllTodo"
    @clearAllDoneTodo="clearAllDoneTodo"
  />
</template>

<script>
import pubsub from "pubsub-js";
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  components: { List, MyFooter, MyHeader },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      // todos: [
      //   {
      //     id: "001",
      //     title: "eat",
      //     done: true,
      //   },
      //   {
      //     id: "002",
      //     title: "sleep",
      //     done: false,
      //   },
      //   {
      //     id: "003",
      //     title: "smoke",
      //     done: true,
      //   },
      // ],
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
    // _ で変数の場所取り、Pubsubで送信データが返却されるのは二番目の変数であるため
    deleteTodo(_, id) {
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
  // 默认监视的是第一层 监视数组有没有变 数组里面的某一次项的数据是不监视的
  watch: {
    todos: {
      deep: true,
      handler(value) {
        const stringifiedValue = JSON.stringify(value);
        localStorage.setItem("todos", stringifiedValue);
      },
    },
    // todos(value) {
    //   console.log("watch");
    //   const stringifiedValue = JSON.stringify(value);
    //   localStorage.setItem("todos", stringifiedValue);
    // },
  },
  mounted() {
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeUnmount() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style >
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #da4f49;
}

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
  margin-right: 5px;
}
</style>