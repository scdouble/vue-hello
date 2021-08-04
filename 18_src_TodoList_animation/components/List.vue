<template>
  <div>
    <ul class="todo-main">
      <transition-group name="todo" appear>
        <Item
          v-for="todoObj in todos"
          :key="todoObj.id"
          :todo="todoObj"
          :checkTodo="checkTodo"
          :deleteTodo="deleteTodo"
        />
      </transition-group>
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
.todo-enter-active {
  animation: atguigu 0.5s linear;
}

.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>