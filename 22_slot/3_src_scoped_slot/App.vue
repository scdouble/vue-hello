<template>
  <div class="container">
    <!-- コンポーネントの利用者がHTML構造を決める -->
    <Category title="Games">
      <template v-slot:default="{ games }">
        <ul>
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>

    <Category title="Games">
      <template v-slot:default="{ games }">
        <ol>
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="Games">
      <template v-slot:default="{ games }">
        <h4 v-for="(item, index) in games" :key="index">
          {{ item }}
        </h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>

<style lang="css">
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>