import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Toolbar from "primevue/toolbar";
import Avatar from "primevue/avatar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Fieldset from "primevue/fieldset";
import Card from "primevue/card";
import Panel from "primevue/panel";
import Breadcrumb from "primevue/breadcrumb";
import Select from "primevue/select";
import Image from "primevue/image";
import ScrollPanel from "primevue/scrollpanel";
import ScrollTop from "primevue/scrolltop";
import TieredMenu from "primevue/tieredmenu";
import Editor from "primevue/editor";

import Lara from "@primevue/themes/lara";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
});
app.use(ToastService);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("Toolbar", Toolbar);
app.component("Avatar", Avatar);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Fieldset", Fieldset);
app.component("Card", Card);
app.component("Panel", Panel);
app.component("Breadcrumb", Breadcrumb);
app.component("Select", Select);
app.component("Image", Image);
app.component("ScrollPanel", ScrollPanel);
app.component("ScrollTop", ScrollTop);
app.component("TieredMenu", TieredMenu);
app.component("InputGroup", InputGroup);
app.component("Editor", Editor);
app.mount("#app");
