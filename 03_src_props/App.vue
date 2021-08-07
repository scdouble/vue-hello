<template>
  <div><Student name="lisi" sex="male" v-bind:age="18" /></div>
</template>

<script>
// templateのv-bindは値の中身を計算結果を送信する？

import Student from "./components/Student";

export default {
  name: "App",
  components: { Student },
};
</script>
