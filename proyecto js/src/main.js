import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import globalComponents from "./global-components";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = createApp(App);

app.use(globalComponents);
app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");