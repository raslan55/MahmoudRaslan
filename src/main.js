import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "/responsive.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import { faWhatsapp, faGithub, } from "@fortawesome/free-brands-svg-icons";

import { faPhone, faEnvelope, faBars, faDesktop, faLink, } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faLink, faEnvelope, faBars, faPhone, faGithub, faWhatsapp);
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
