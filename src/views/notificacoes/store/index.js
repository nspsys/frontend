import { db } from "@/services/firebaseService";
import {
  collection,
  doc,
  query,
  where,
  onSnapshot,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export default {
  name: "NotificacoesStore",
  namespaced: true,
  state: () => ({
    notificacoes: [],
    total: 0,
    emAndamento: 0,
    semResponsavel: 0,
    concluidas: 0,
    notificacao: {},
  }),
  getters: {
    obterNotificacoes: ({ notificacoes }) => {
      return notificacoes;
    },
    obterTotal: ({ total }) => {
      return total;
    },
    obterNotificacao: ({ notificacao }) => {
      return notificacao;
    },
    obterEmAndamento: ({ emAndamento }) => {
      return emAndamento;
    },
    obterSemResponsavel: ({ semResponsavel }) => {
      return semResponsavel;
    },
    obterConcluidas: ({ concluidas }) => {
      return concluidas;
    },
  },
  mutations: {
    definirNotificacoes: async (state, notificacoes) => {
      notificacoes.forEach((doc) => {
        const data = { id: `${doc.id}`, ...doc.data() };
        state.notificacoes.push(data);
      });
    },
    definirTotal: (state, total) => {
      state.total = total;
    },
    filtrarNotificacao: (state, notificacao) => {
      state.notificacao = notificacao;
    },
    definirEmAndamento: (state, emAndamento) => {
      state.emAndamento = emAndamento;
    },
    definirSemResponsavel: (state, semResponsavel) => {
      state.semResponsavel = semResponsavel;
    },
    definirConcluidas: (state, concluidas) => {
      state.concluidas = concluidas;
    },
    salvarNotificacao: async (state, notificacao) => {
      try {
        state.notificacao = notificacao;
        const _doc = doc(db, "notificacoes", notificacao.id);
        await updateDoc(_doc, notificacao);
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {
    obterNotificacoes: async ({ commit, state }, filter = []) => {
      const queryConstraints = [];
      if (filter.length) {
        filter.forEach((item) => {
          queryConstraints.push(
            where(`${item.campo}`, `${item.condicao}`, `${item.valor}`)
          );
        });
      }
      const q = query(collection(db, "notificacoes"), ...queryConstraints);
      const querySnapshot = await getDocs(q);
      state.notificacoes = [];
      commit("definirNotificacoes", querySnapshot);
    },
    obterTotal: async ({ commit }) => {
      const snap = db.collection("notificacoes");
      snap.onSnapshot(
        (docs) => {
          commit("definirTotal", docs.size);
        },
        (error) => {
          console.error("Erro ao monitorar o contador:", error);
        }
      );
    },
    obterEmAndamento: async ({ commit }) => {
      const q = query(
        collection(db, "notificacoes"),
        where("situacao", "==", "Aberto")
      );
      onSnapshot(q, (docs) => {
        commit("definirEmAndamento", docs.size);
      });
    },
    obterSemResponsavel: async ({ commit }) => {
      const q = query(
        collection(db, "notificacoes"),
        where("responsavel", "==", "")
      );
      onSnapshot(q, (docs) => {
        commit("definirSemResponsavel", docs.size);
      });
    },
    obterConcluidas: async ({ commit }) => {
      const q = query(
        collection(db, "notificacoes"),
        where("situacao", "==", "Finalizado")
      );
      onSnapshot(q, (docs) => {
        commit("definirConcluidas", docs.size);
      });
    },
    filtrarNotificacao: async ({ state, commit }, id) => {
      const notificacao = state.notificacoes.filter((item) => {
        if (item.id == id) return item;
      });

      commit("filtrarNotificacao", notificacao[0]);
    },
    salvarNotificacao: async ({ commit }, notificacao) => {
      commit("salvarNotificacao", notificacao);
    },
  },
};
