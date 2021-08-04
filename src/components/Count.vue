<template>
  <div>
    <h1>足し合わせた結果:{{ sum }}</h1>
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
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>