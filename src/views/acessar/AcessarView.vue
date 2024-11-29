<template>
  <div class="acesso">
    <section class="painel-acesso">
      <form>
        <Fieldset legend="Acesso">
          <div class="flex flex-col gap-2">
            <label for="username">Usuário</label>
            <br />
            <InputText
              id="usuario"
              aria-describedby="usuario-help"
              v-model="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <br />
          <div class="flex flex-col gap-2">
            <label for="senha">Senha</label>
            <br />
            <InputText
              type="password"
              id="senha"
              aria-describedby="senha-help"
              v-model="pass"
              name="senha"
              placeholder="Senha"
            />
          </div>
          <br />
          <Button @click="login">Entrar</Button>
          <p class="message">
            Não está registrado?<a href="#" v-on:click="register">
              Cadastre-se</a
            >
          </p>
        </Fieldset>
      </form>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  methods: {
    register() {
      this.$router.push("/register");
    },
    login() {
      this.$store.dispatch({
        type: "AcessarStore/login",
        email: this.email,
        pass: this.pass,
      });
    },
  },
  data: () => ({
    email: null,
    pass: null,
  }),
  computed: {
    ...mapState({
      myObj: (state) => state.LoginStore.currentSession,
    }),
    ...mapGetters({ connected: "AcessarStore/isConnected" }),
  },
  async mounted() {
    this.email = "teste@teste.com.br";
    this.pass = "abc123";

    if (this.connected) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.acesso {
  background-image: url("acesso.svg");
  width: 100%;
  height: 926px;
  display: flex;
  justify-content: right;
  align-items: center;
  border: solid 1px black;
  .painel-acesso {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 504px;
    height: 683.47px;
    background-color: rgba(255, 255, 255, 0.5);
    margin-right: 130px;
    border-radius: 10px;
    form {
      padding: 20px;
      width: 452.37px;
      height: 624.47px;
      border-radius: 10px 0px 0px 0px;
      background-color: white;
    }
  }
}
</style>
