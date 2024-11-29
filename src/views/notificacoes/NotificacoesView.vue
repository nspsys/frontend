<style src="./notificacoes.scss" lang="scss" scoped></style>
<template>
  <div class="container">
    <Breadcrumb :home="home" :model="items"> </Breadcrumb>
    <main class="notifications">
      <section class="notifications-content">
        <Cards :childs="cards"></Cards>
        <Grid
          :rows="notificacoes"
          :fields="grid.fields"
          :fnClick="rowClick"
        ></Grid>
      </section>
      <aside class="notifications-filter">
        <Panel header="Filtro">
          <div class="flex flex-col gap-2">
            <label for="protocolo">Nº de Protocolo</label>
            <InputText
              id="protocolo"
              v-model="protocolo"
              aria-describedby="protocolo-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="classificacao">Classificação</label>
            <InputText
              id="classificacao"
              v-model="classificacao"
              aria-describedby="classificacao-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="responsavel">Responsável</label>
            <InputText
              id="responsavel"
              v-model="responsavel"
              aria-describedby="responsavel-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="situacao">Situação</label>
            <InputText
              id="situacao"
              v-model="situacao"
              aria-describedby="situacao-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="autor">Autor da Notificação</label>
            <InputText
              id="autor"
              v-model="autor"
              aria-describedby="autor-help"
            />
          </div>
          <hr />
          <div class="flex flex-col gap-2">
            <Button
              label="Buscar"
              icon="pi pi-search"
              iconPos="top"
              @click="definirFiltro"
            ></Button>
          </div>
        </Panel>
      </aside>
    </main>
  </div>
</template>

<script>
import Grid from "../../components/grid/Grid.vue";
import Cards from "../../components/cards/Cards.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      protocolo: null,
      classificacao: null,
      responsavel: null,
      situacao: null,
      autor: null,
      home: "Notificações",
      items: [
        {
          route: "notificacoes",
          target: "",
          url: "/notificacoes",
          icon: "pi pi-building-columns",
          label: "Notificações",
        },
      ],
      grid: {
        fields: [
          { field: "id", header: "Protocolo" },
          { field: "data_ocorrencia", header: "Abertura" },
          // { field: "data_ocorrencia", header: "Prazo de Resolução" },
          // { field: "data_ocorrencia", header: "Data de Conclusão" },
          { field: "tipo", header: "Classificação" },
          // { field: "id", header: "Situação" },
          // { field: "id", header: "Responsável" },
          { field: "notificante_nome", header: "Autor" },
        ],
      },
      filter: [],
    };
  },
  components: { Grid, Cards },
  methods: {
    ...mapActions({
      obterNotificacoes: "NotificacoesStore/obterNotificacoes",
      obterTotal: "NotificacoesStore/obterTotal",
      obterEmAndamento: "NotificacoesStore/obterEmAndamento",
      obterSemResponsavel: "NotificacoesStore/obterSemResponsavel",
      obterConcluidas: "NotificacoesStore/obterConcluidas",
    }),
    rowClick(e) {
      this.$router.push(`/notificacao/${e.data.id}`);
    },
    definirFiltro(e) {
      this.filter = [];
      if (this.protocolo)
        this.filter.push({
          campo: "id",
          condicao: "==",
          valor: this.protocolo,
        });
      if (this.classificacao)
        this.filter.push({
          campo: "classificacao",
          condicao: "==",
          valor: this.classificacao,
        });
      if (this.responsavel)
        this.filter.push({
          campo: "responsavel",
          condicao: "==",
          valor: this.responsavel,
        });
      if (this.situacao)
        this.filter.push({
          campo: "situacao",
          condicao: "==",
          valor: this.situacao,
        });
      this.obterNotificacoes(this.filter);
    },
  },
  computed: {
    ...mapGetters({
      notificacoes: "NotificacoesStore/obterNotificacoes",
      total: "NotificacoesStore/obterTotal",
      emAndamento: "NotificacoesStore/obterEmAndamento",
      semResponsavel: "NotificacoesStore/obterSemResponsavel",
      concluidas: "NotificacoesStore/obterConcluidas",
    }),
    cards() {
      return [
        { title: "Total", value: this.total },
        { title: "Em Andamento", value: this.emAndamento },
        { title: "Sem Responsável", value: this.semResponsavel },
        { title: "Atendidas", value: this.concluidas },
      ];
    },
  },
  async mounted() {
    this.obterNotificacoes();
    this.obterTotal();
    this.obterEmAndamento();
    this.obterSemResponsavel();
    this.obterConcluidas();
  },
};
</script>
