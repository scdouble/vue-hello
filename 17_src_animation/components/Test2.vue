<template>
  <div>
    <button @click="isShow = !isShow">Show / Unshow</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">Hello!</h1>
      <h1 v-show="isShow" key="2">GUIGU!</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
h1 {
  background-color: orange;
}

/* 进入的起点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
  transition: 0.5s linear;
}
/* 进入的终点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>