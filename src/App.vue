<template>
  <Toast />
  <main class="content">
    <header class="cabecalho" v-if="connected">
      <Header></Header>
    </header>
    <section class="principal">
      <RouterView />
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import { initializeToast } from "@/services/toastService";

export default {
  setup() {
    initializeToast();
  },
  components: { Header },
  computed: {
    ...mapGetters({
      connected: "AcessarStore/isConnected",
    }),
  },
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "cabecalho"
    "principal"
    "rodape";
}

.cabecalho {
  grid-area: cabecalho;
  margin: 0;
}

.principal {
  grid-area: principal;
}

.rodape {
  grid-area: rodape;
}
</style>
