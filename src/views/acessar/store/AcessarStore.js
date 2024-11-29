import { auth } from "@/services/firebaseService.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default {
  namespaced: true,
  state: () => ({
    currentSession: {
      displayName: null,
      email: null,
      phoneNumber: null,
      photoURL: null,
      accessToken: null,
      createdAt: null,
      lastLoginAt: null,
      lastRefreshAt: null,
      passwordUpdatedAt: null,
      connected: false,
      localId: null,
    },
  }),
  getters: {
    currentSession: ({ currentSession }) => {
      return currentSession;
    },
    isConnected: ({ currentSession }) => {
      return currentSession.connected;
    },
    gamer: ({ currentSession }) => {
      return currentSession.email;
    },
    localId: ({ currentSession }) => {
      return currentSession.localId;
    },
  },
  mutations: {
    setSession: (state, firebaseSession) => {
      state.currentSession = { ...state.currentSession, ...firebaseSession };
      window.location = "/";
    },
  },
  actions: {
    login: async ({ getters, commit }, credentials) => {
      if (!getters.currentSession.connected) {
        const response = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.pass
        );
        const { user } = response;
        const session = {
          localId: user.uid,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          accessToken: user.accessToken,
          createdAt: user.reloadUserInfo.createdAt,
          lastLoginAt: user.reloadUserInfo.lastLoginAt,
          lastRefreshAt: user.reloadUserInfo.lastRefreshAt,
          passwordUpdatedAt: user.reloadUserInfo.passwordUpdatedAt,
          connected: true,
        };
        commit("setSession", session);
      } else {
        console.log("já existe sessão.");
      }
    },
    logout: async ({ commit }) => {
      await signOut(auth);
      const data = {
        displayName: null,
        email: null,
        phoneNumber: null,
        photoURL: null,
        accessToken: null,
        createdAt: null,
        lastLoginAt: null,
        lastRefreshAt: null,
        passwordUpdatedAt: null,
        connected: false,
        localId: null,
      };
      commit("setSession", data);
    },
  },
};
