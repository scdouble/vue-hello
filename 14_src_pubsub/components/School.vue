<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="sendSchoolName">Send school name to App.Vue</button>
  </div>
</template>

<script>
//pusubはオブジェクト
import pubsub from "pubsub-js";
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "shangguiguatguigu",
      address: "beijing",
    };
  },

  mounted() {
    // pubsub-jsでsubscribeするときはIDが発行される、UnsubscribeするときはこのIDを使う
    // this.pubIdに入れることで、他のライフサイクルフックでアクセスが可能になる
    // this.pubId = pubsub.subscribe("hello", this.demo,)
    this.pubId = pubsub.subscribe("hello", (msgName, data) => {
      console.log(
        "hello topicにメッセージが送信された、helloのコールバックが実行した",
        msgName,
        data
      );
    });
  },
  beforeUnmount() {
    // pubsub-jsでsubscribeするときはIDが発行される、UnsubscribeするときはこのIDを使う

    pubsub.unsubscribe(this.pubId);
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
    // demo(msgName, data) {
    //   console.log(msgName, data);
    // },
  },
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
}
</style>
