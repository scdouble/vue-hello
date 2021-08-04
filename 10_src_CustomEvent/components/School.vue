<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="sendSchoolName">Send school name to App.Vue</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "shangguiguatguigu",
      address: "beijing",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>
<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
}
</style>
