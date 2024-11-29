<style src="./notificacoes.scss" lang="scss" scoped></style>
<template>
  <div class="container">
    <Breadcrumb :home="breadcrumb.home" :model="breadcrumb.items"> </Breadcrumb>
    <section class="notificacao">
      <section class="notificacao-content">
        <Fieldset legend="Detalhes da Notificação">
          <p v-for="(item, key) in notificacao" class="notificacao-detalhe">
            <span>{{ key }}</span> : {{ item }}
          </p>
        </Fieldset>
        <Editor v-model:content="editorContent" editorStyle="height: 320px" />
        <div v-for="(c, i) in notificacao.comentarios">
          {{ c }}
          <Select
            v-model="c.visibilityLevel"
            :options="optionsList"
            optionLabel="name"
            placeholder="Defina a visibilidade"
            class="w-full md:w-56"
          ></Select>
          <textarea v-model="c.comment" editorStyle="height: 320px"></textarea>
        </div>
      </section>
      <section class="notificacao-filter">
        <Panel header="Ações">
          <div class="flex flex-col gap-2">
            <label for="situacao">Situação</label>
            <InputText
              id="situacao"
              v-model="notificacao.situacao"
              aria-describedby="situacao-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="responsavel">Responsável</label>
            <InputText
              id="responsavel"
              v-model="notificacao.responsavel"
              aria-describedby="responsavel-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="classificacao">Classificação</label>
            <InputText
              id="classificacao"
              v-model="notificacao.classificacao"
              aria-describedby="classificacao-help"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="prazo">Prazo</label>
            <InputText
              id="prazo"
              v-model="notificacao.prazo"
              aria-describedby="prazo-help"
            />
          </div>
          <hr />
          <div class="flex flex-col gap-2">
            <Button label="Salvar" @click="salvar"></Button>
          </div>
        </Panel>
      </section>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { success } from "@/services/toastService";
import MeuComentario from "@/components/notificacoes/Comentario.vue";

export default {
  data() {
    return {
      editorContent: "Julio",
      // comentarios: [],
      optionsList: [
        { id: 1, name: "Público" },
        { id: 2, name: "Privado" },
      ],
      breadcrumb: {
        home: "teste",
        items: [
          {
            route: "notificacoes",
            target: "",
            url: "/notificacoes",
            icon: "pi pi-building-columns",
            label: "Notificações",
          },
          {
            route: "notificacao",
            target: "",
            url: `/notificacao/${this.$route.params.id}`,
            label: this.$route.params.id,
          },
        ],
      },
    };
  },
  components: [MeuComentario],
  computed: {
    ...mapGetters({
      notificacao: "NotificacoesStore/obterNotificacao",
    }),
  },
  methods: {
    ...mapActions({
      filtrarNotificacao: "NotificacoesStore/filtrarNotificacao",
      salvarNotificacao: "NotificacoesStore/salvarNotificacao",
    }),
    salvar(e) {
      this.salvarNotificacao(this.notificacao);
      success("Notificação salva com sucesso!");
    },
  },
  async mounted() {
    await this.filtrarNotificacao(this.$route.params.id);
    this.comentarios = [...this.notificacao.comentarios];
    setTimeout(() => {
      this.editorContent = "Raviel";
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.notificacao {
  display: grid;
  grid-template-columns: 4fr 1fr;
  .notificacao-content {
    margin: 30px;
    .notificacao-detalhe {
      span {
        font-weight: bold;
      }
    }
  }
  .notificacao-filter {
    margin: 30px 0 0 110px;
  }
}
</style>
