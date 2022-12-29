import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import PrimeVue from "primevue/config";

const app = createApp(App).use(store);
app.use(PrimeVue);
app.mount("#app");
