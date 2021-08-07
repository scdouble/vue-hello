<template>
  <ul>
    <li>Message Number:{{ $route.query.id }}</li>
    <li>Message Content:{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>