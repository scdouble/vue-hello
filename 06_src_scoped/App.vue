<template>
  <div>
    <School />
    <hr />
    <Student />
  </div>
</template>

<script>
// templateのv-bindは値の中身を計算結果を送信する？

import Student from "./components/Student";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { Student, School },
};
</script>

<style lang="css">
.title {
  background-color: red;
}
</style>