<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- query stringでルート切り替え、toのqueryの書き方 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->

        <!-- query stringでルート切り替え、toのObjectの書き方 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: { id: m.id, title: m.title },
          }"
          >{{ m.title }}</router-link
        >
      </li>
    </ul>
    <hr />

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
};
</script>

<style>
</style>