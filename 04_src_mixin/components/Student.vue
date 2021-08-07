<template>
  <div>
    <h2 @click="showName">Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
  </div>
</template>

<script>
//
import { mixin } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      sex: "male",
    };
  },
  mixins: [mixin],
};
</script>

<style>
</style>