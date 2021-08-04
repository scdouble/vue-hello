<template>
  <div class="category">
    <h3>{{ title }}</h3>

    <slot name="center">
      スロットデフォルト値。データがない時はこの文字列が表示される</slot
    >
    <slot name="footer">
      スロットデフォルト値。データがない時はこの文字列が表示される</slot
    >
  </div>
</template>

<script>
export default {
  name: "category",
  props: ["title", "listData"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>