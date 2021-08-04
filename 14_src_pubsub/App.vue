<template>
  <div class="app">
    <h1>{{ msg }}, {{ studentName }}</h1>
    <!-- 親Componentから子Componentへ関数型propsを送ることで子から親へのデータ転送を実現する -->
    <School :getSchoolName="getSchoolName" />
    <!-- Student componentのInstance（实例对象VC）にatguiguという名前のイベントを紐つける -->
    <Student v-on:atguigu="getStudentName" />
    <!-- <Student v-on:atguigu.once="getStudentName" /> -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School.vue";

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "Hello",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("app get school", name);
    },
    //送信する数だけの変数を作ってEmitのデータを受け入れる
    // getStudentName(name, x, y, z) {
    //   console.log("app get student", name, x, y, z);
    // },

    //最初の一個変数をnameで受け入れて、残りはaという名前listにする
    getStudentName(name, ...params) {
      this.studentName = name;
      console.log("app get student", name, params);
    },
  },
  // Vue3で＄onが使えなくなった
  // mounted() {
  //   this.$refs.abc.$on("atguigu", this.getStudentName);
  // },
};
</script>

<style lang="css">
.app {
  background-color: gray;
  padding: 5px;
}
</style>