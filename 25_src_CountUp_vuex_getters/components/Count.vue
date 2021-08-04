<template>
  <div>
    <h1>足し合わせた結果: {{ $store.state.sum }}</h1>
    <h2>足し合わせた結果*10: {{ $store.getters.bigSum }}</h2>
    <select v-model.number="n">
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数の場合ならCount Up</button>
    <button @click="incrementWait">少し待ってからCount Up</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increment() {
      // this.$store.dispatch("jia", this.n);
      // actionsの中で直接ロジックがない場合は直接mutaionをcommitできる
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.dispatch("jian", this.n);
    },
    // incrementOdd() {
    //   if (this.$store.state.sum % 2) {
    //     this.$store.dispatch("jia", this.n);
    //   }
    // },
    // incrementWait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("jia", this.n);
    //   }, 500);
    // },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    //  this.$store.state.sum;
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>