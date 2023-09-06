import { createApp } from "vue";
import VueTypedJs from "vue-typed-js";
import App from "./App.vue";
import { router } from "./router/index";
import { store } from "./store/index";

const app = createApp(App);

app.use(VueTypedJs).use(store).use(router);

app.mount("#app");
