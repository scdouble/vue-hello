<template>
  <div>
    <Student />
    <hr />
    <School />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      myAge: this.age,
    };
  },
  props: ["age"],
  components: { Student, School },
};
</script>
