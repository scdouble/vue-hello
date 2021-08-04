<template>
  <div class="container">
    <Category title="Foods" :listData="foods">
      <img
        src="https://digiq.s3-ap-northeast-1.amazonaws.com/bbq/letsbbq/wp-content/uploads/2021/04/27121949/bbq_photo-1_R.jpg"
      />
    </Category>

    <Category title="Games">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="Films">
      <video
        controls
        src="http://techslides.com/demos/sample-videos/small.mp4"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["すき焼き", "BBQ", "ステーキ"],
      games: ["モンハン", "FF", "ドラクエ"],
      films: ["007", "アイアンマン", "タイタニック"],
    };
  },
};
</script>

<style lang="css">
.container {
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