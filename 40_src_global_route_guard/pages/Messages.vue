<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- paramsでルート切り替え、toのqueryの書き方 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- queryでルート切り替え、toのObjectの書き方 -->
        <router-link
          :to="{
            name: 'xiangqing',
            path: '/home/message/detail',
            query: { id: m.id, title: m.title },
          }"
        >
          {{ m.title }}
        </router-link>
        <button @click="pushShow(m)">Push Show</button>
        <button @click="replaceShow(m)">Relplace Show</button>
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
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "xiangqing",
        path: "/home/message/detail",
        query: { id: m.id, title: m.title },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "xiangqing",
        path: "/home/message/detail",
        query: { id: m.id, title: m.title },
      });
    },
  },
};
</script>

<style>
</style>