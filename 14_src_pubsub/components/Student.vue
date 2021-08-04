<template>
  <div class="student">
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Sex: {{ sex }}</h2>
    <button @click="sendStudentName">Send student name to App.Vue</button>
    <button @click="unbind">Unbind custome event</button>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      sex: "male",
    };
  },
  methods: {
    sendStudentName() {
      //Student コンポーネントにあるatguiguイベントをトリガーする
      //複数の値をSendできる
      //this.$emit("atguigu", this.name, 666, 888, 999);
      pubsub.publish("hello", 666);
    },
  },
  unbind() {
    //this.$off("atguigu");
    // 複数をUnbin
    // this.$off(["atguigu","demo"]);
    // 全てのCustome eventをUnbind
    // this.$off()
  },
};
</script>

<style >
.student {
  background-color: orange;
  padding: 5px;
}
</style>

