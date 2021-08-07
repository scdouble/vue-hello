<template>
  <div>
    <ul>
      <li :style="{ opacity }">Welcome to study</li>
      <li>news001<input type="text" /></li>
      <li>news002<input type="text" /></li>
      <li>news003<input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  // beforeDestroy() {
  //   console.log("Newsコンポーネントが消滅する");
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   this.timer = setInterval(() => {
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },

  activated() {
    console.log("News", "actived");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News", "deactived");
    clearInterval(this.timer);
  },
  data() {
    return {
      opacity: 1,
    };
  },
};
</script>

<style>
</style>