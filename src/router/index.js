import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import AcessarView from "../views/acessar/AcessarView.vue";
import NotificacoesView from "../views/notificacoes/NotificacoesView.vue";
import NotificacaoView from "../views/notificacoes/NotificacaoView.vue";
import NaoEncontrado from "../views/NaoEncontrada.vue";
import CadastrarView from "../views/CadastrarView.vue";
import { auth } from "../middleware/auth";
import log from "../middleware/log";
const dotenv = import.meta.env;

const router = createRouter({
  history: createWebHistory(dotenv.VITE_BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
      beforeEnter: [auth, log],
    },
    {
      path: "/acessar",
      name: "acessar",
      component: AcessarView,
      beforeEnter: [auth],
    },
    {
      path: "/notificacoes",
      name: "notificacoes",
      component: NotificacoesView,
      beforeEnter: [auth],
    },
    {
      path: "/notificacao/:id",
      name: "notificacao",
      component: NotificacaoView,
      beforeEnter: [auth],
    },
    {
      path: "/cadastrar",
      name: "cadastrar",
      component: CadastrarView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NaoEncontrado,
    },
  ],
  mode: "history",
});

export default router;
