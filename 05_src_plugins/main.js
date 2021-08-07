import { createApp } from "vue";
import App from "./App.vue";

import obj from "./plugins";

const app = createApp(App);
app.use(obj);

app.mount("#app");
