// import "./scss/styles.scss";
import { createApp } from "vue";
import "./js/three"; // three.js設定
//import "./js/threeSpotLine"; // three.js設定
import App from "./App.vue";
import { router } from "./router/index";

const app = createApp(App);

app.use(router);

app.mount("#app");
