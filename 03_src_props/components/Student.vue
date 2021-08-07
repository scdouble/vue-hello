<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <h2>Student Age: {{ myAge }}</h2>
    <button @click="updateAge">Change age</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "I am a student",
      myName: this.name,
      myAge: this.age,
    };
  },

  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //親からのPropsをそのまま受け入れる,Propsで受け入れる予定のないものは宣言しない。Propsは変更できない、
  //popsの値はdataの中身より優先度が高い
  props: ["name", "sex", "age"],

  //型を決めて、Propを受けれる
  //   props: {
  //     name: String,
  //     age: Number,
  //     sex: String,
  //   },

  //型を決めて、Propを受けれる + 必須制限＋デフォルト値
  //   props: {
  //     name: {
  //       type: String,
  //       required: true,
  //     },
  //     age: {
  //       type: Number,
  //       default: 99, // デフォルト値
  //     },
  //     sex: {
  //       type: String,
  //       required: true,
  //     },
  //   },
};
</script>

<style>
</style>