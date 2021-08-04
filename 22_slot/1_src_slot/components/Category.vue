<template>
  <div class="category">
    <h3>{{ title }}</h3>

    <slot> スロットデフォルト値。データがない時は表示される</slot>
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