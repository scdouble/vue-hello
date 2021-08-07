<template>
  <div>
    <h2 @click="showName">School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";
import { mixin2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "abc",
      address: "beijing",
      x: 666, // data()のデータはmixinより優先される
    };
  },
  //ローカルMixin
  mixins: [mixin, mixin2],
  mounted() {
    //ライフサイクルのHookは全部実行される。優先度はmixinの方が先
    console.log("Hello!!!!");
  },
};
</script>

<style>
</style>