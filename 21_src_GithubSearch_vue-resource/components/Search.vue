<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      // console.log(this);
      // upade
      this.emitter.emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        // vue-resourceを使ったやり方。VueResouceはXhrをマッパーしている。あまりメンテナンスされてない
        // this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("Request OK");
          // this.emitter.emit("updateListData", response.data.items);
          this.emitter.emit("updateListData", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("Request NG", error.message);
          this.emitter.emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>
