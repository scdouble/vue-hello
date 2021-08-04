<template>
  <div>
    <button @click="getStudents">Get Student Information</button>
    <button @click="getCars">Get Car Information</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("Request OK", response.data);
        },
        (error) => {
          console.log("Request NG", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/demo/cars").then(
        (response) => {
          console.log("Request OK", response.data);
        },
        (error) => {
          console.log("Request NG", error.message);
        }
      );
    },
  },
};
</script>

<style >
</style>