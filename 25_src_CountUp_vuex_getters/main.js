import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";

import store from "./store/index";

// import vueResource from "vue-resource";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
// app.use(vueResource);
app.use(store);
app.mount("#app");
