<template>
  <div>
    <h1>Person List</h1>
    <h3 style="color: red">Countコンポーネントの合計は{{ sum }}</h3>
    <input type="text" placeholder="Please input name" v-model="name" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    add() {
      const personObj = {
        id: nanoid(),
        name: this.name,
      };
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
    // ...mapState(["personList"]),
  },
};
</script>

<style>
</style>