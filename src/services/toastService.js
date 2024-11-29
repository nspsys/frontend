import { useToast } from "primevue/usetoast";

let toast;

export function initializeToast() {
  toast = useToast();
}

export function success(msg) {
  toast?.add({
    severity: "success",
    summary: "Sucesso",
    detail: msg,
    life: 3000,
  });
}

export function error(msg) {
  toast?.add({
    severity: "error",
    summary: "Erro",
    detail: msg,
    life: 3000,
  });
}
