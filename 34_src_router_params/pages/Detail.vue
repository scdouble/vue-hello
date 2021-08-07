<template>
  <ul>
    <li>Message Number:{{ $route.params.id }}</li>
    <li>Message Content:{{ $route.params.title }}</li>
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