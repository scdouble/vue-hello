<template>
  <h2>About</h2>
</template>

<script>
export default {
  name: "About",
  //Routeのルールを通してコンポーネントに入ったとき
  beforeRouteEnter(to, from, next) {
    console.log("About--beforeRouteEnter");
    next();
  },

  //Routeのルールを通してコンポーネントから離れるとき

  beforeRouteLeave(to, from, next) {
    console.log("About--beforeRouteLeave");
    next();
  },
};
</script>

<style>
</style>