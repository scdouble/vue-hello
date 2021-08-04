<template>
  <div class="demo">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
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
};
</script>

<style >
.demo {
  background-color: orange;
}
</style>

