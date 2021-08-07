<template>
  <ul>
    <li>Message Number:{{ id }}</li>
    <li>Message Content:{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>