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
    <button @click="increment(n)">+</button>
    <!-- <button @click="increment">+</button> -->
    <!-- incrementで(引き数)をつけない場合はeventが暗黙的に連携される -->
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数の場合ならCount Up</button>
    <button @click="incrementWait(n)">少し待ってからCount Up</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    //mapMutationを使ってメソッドを生成する、commitは中で呼び出される(Objectの書き方)
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    //...mapMutations(["JIA","JIAN"]),

    // *******************************

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    //mapActionsを使ってメソッドを生成する、dispatchは中で呼び出される(Objectの書き方)
    ...mapActions({ incrementOdd: "jiaOdd", incrementWait: "jiaWait" }),
    //...mapMutations(["jiaOdd","jiaWait"]),
  },
  computed: {
    // mapStateからcomputedを生成, Stateからデータを呼び出す（Objectの書き方）
    //...mapState({ sum: "sum", school: "school", subject: "subject" }),

    // mapStateからcomputedを生成, Stateからデータを呼び出す（Listの書き方）
    ...mapState(["sum", "school", "subject"]),

    // ***
    //...mapGetters({bigSum:"bigSum"}),
    ...mapGetters(["bigSum"]),
  },

  mounted() {},
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>