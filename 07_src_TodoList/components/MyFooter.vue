<template>
  <div v-show="total">
    <label for="">
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span> Done {{ doneTotal }}</span
      >/ Total {{ total }}
    </span>
    <button @click="clearAll">Clear all done</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "checkAllTodo", "clearAllDoneTodo"],
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      this.clearAllDoneTodo();
    },
  },
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // let i = 0;
      // this.todos.forEach((todo) => {
      //   if (todo.done) i++;
      // });
      // return i;

      return this.todos.reduce((pre, todo) => {
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
    // isAll() {
    //   return this.doneTotal === this.total && this.total > 0;
    // },

    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },
};
</script>

<style>
</style>