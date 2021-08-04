<template>
  <div>
    <h1>足し合わせた結果: {{ sum }}</h1>
    <h2>足し合わせた結果*10: {{ bigSum }}</h2>
    <h3>{{ school }}で{{ subject }}の勉強をしています</h3>
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
import { mapState, mapGetters } from "vuex";
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
  computed: {
    // 自分でComputedの中で代入するロジックを書く
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    // mapStateからcomputedを生成, Stateからデータを呼び出す（Objectの書き方）
    //...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // mapStateからcomputedを生成, Stateからデータを呼び出す（Listの書き方）
    ...mapState(["sum", "school", "subject"]),

    // ***
    //...mapGetters({bigSum:"bigSum"}),
    ...mapGetters(["bigSum"]),
  },

  mounted() {
    //  this.$store.state.sum;
    //const x = mapState(["sum", "school", "subject"]);
    //console.log(x);
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>