<template>
  <div>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <button @click="test">Test</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      sex: "male",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style>
</style>