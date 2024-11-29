import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import AcessarStore from "@/views/acessar/store/AcessarStore";
import NotificacoesStore from "@/views/notificacoes/store";

export default createStore({
  modules: {
    AcessarStore,
    NotificacoesStore,
  },
  plugins: [createPersistedState()],
});
