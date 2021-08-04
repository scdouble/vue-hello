<template>
  <div class="row">
    <!-- Show User List -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- Show Welcome message -->
    <h1 v-show="info.isFirst">Welcome!</h1>

    <!-- Show Loading page -->

    <h1 v-show="info.isLoading">Loading...</h1>
    <!-- Show Error message -->

    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    // this.emitter.emit('getUsers',this.xxxxx) methodsで定義しているものも支える
    this.emitter.on("updateListData", (dataObj) => {
      // console.log("List Component, Got data", users);
      // this.users = users;
      // this.isFirst = isFirst;
      // this.isLoading = isLoading;
      // this.errMsg = errMsg;
      this.info = { ...this.info, ...dataObj };
      console.log(dataObj);
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>