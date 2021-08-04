<template>
  <div>
    <input
      type="text"
      placeholder="Plese input your item name"
      @keyup.enter="add"
      v-model="title"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "MyHeader",
  // props: ["addTodo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    add() {
      //入力判断
      if (!this.title.trim()) return alert("文字を入力してください");
      //todoをObj化する
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // App.Vueコンポーネントのmethodを使ってtodoを追加する
      //this.addTodo(todoObj);
      this.$emit("addTodo", todoObj);
      //入力欄をクリアする
      this.title = "";
    },
  },
};
</script>

<style>
</style>