import { createApp } from "vue";
import App from "./App.vue";
import BoilerplatePlugin from "./plugins/BoilerplatePlugin";
import { createPinia } from "pinia";

// Init App
const app = createApp(App);
app.use(BoilerplatePlugin).use(createPinia()).mount("#app");
