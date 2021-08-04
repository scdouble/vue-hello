<template>
  <div>
    <h1>Person List</h1>
    <h3 style="color: red">Countコンポーネントの合計は{{ sum }}</h3>
    <h3>Person Listの最初の人の名前は{{ firstPersonName }}</h3>
    <input type="text" placeholder="Please input name" v-model="name" />
    <button @click="add">追加</button>
    <button @click="addWang">追加Wang</button>
    <button @click="addPsersonServer">追加ServerName</button>
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
      this.$store.commit("b/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("b/addPersonWang", personObj);
    },
    addPsersonServer() {
      this.$store.dispatch("b/addPersonServer");
    },
  },
  computed: {
    personList() {
      return this.$store.state.b.personList;
    },
    sum() {
      return this.$store.state.a.sum;
    },
    firstPersonName() {
      return this.$store.getters["b/firstPersonName"];
    },
    // ...mapState(["personList"]),
  },
};
</script>

<style>
</style>