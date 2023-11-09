import { createApp } from "vue";
import "./assets/scss/style.scss";
// IMPORT ROUTER
import { router } from "./router";
// IMPORT BOOTSTRAP
import * as bootstrap from "bootstrap";
// IMPORT FONTAWSOME

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
