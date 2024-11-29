import store from "../store";

const isConnected = store.getters["AcessarStore/isConnected"];

export const auth = function (to, from, next) {
  if (!isConnected && to.name != "acessar") {
    return next({
      path: "/acessar",
    });
  } else {
    return next();
  }
};
