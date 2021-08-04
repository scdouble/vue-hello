import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

// import vueResource from "vue-resource";

const emitter = mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
// app.use(vueResource);

app.mount("#app");
