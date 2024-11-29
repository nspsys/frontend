<template>
  <div class="container">
    <Fieldset legend="Cadastro">
      <InputGroup>
        <label for="usuario">Email</label>
        <InputText
          id="usuario"
          v-model="usuario"
          aria-describedby="usuario-help"
          placeholder="Email"
          :required="true"
        />
      </InputGroup>
      <InputGroup>
        <label for="senha">Senha</label>
        <InputText
          type="password"
          id="senha"
          v-model="senha"
          aria-describedby="senha-help"
          placeholder="Senha"
          required
        />
      </InputGroup>
      <InputGroup>
        <Button @click="register">Salvar</Button>
        <RouterLink to="/"
          ><Button label="Voltar" to="/" text plain
        /></RouterLink>
      </InputGroup>
    </Fieldset>
  </div>
</template>

<script>
import { success, error } from "@/services/toastService";
import { auth } from "../services/firebaseService.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default {
  methods: {
    async register() {
      const email = this.usuario;
      const password = this.senha;

      if (!email || !password)
        return error("Usuário e senha são campos obrigatórios!");

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        this.$store.dispatch({
          type: "AcessarStore/login",
          email: this.usuario,
          pass: this.senha,
        });
        success("Novo usuário Cadastrado com sucesso!");
        this.$router.push("/");
      } catch (er) {
        console.log(er.code);
        switch (er.code) {
          case "auth/email-already-in-use":
            error("Email já cadastrado!");
            break;
          default:
            error("Erro ao cadastrar usuário!");
        }
      }
    },
  },
  data: () => ({
    usuario: null,
    senha: null,
  }),
};
</script>

<style scoped lang="scss">
.container {
  margin: 30px;
}
.p-inputgroup {
  display: block;
  margin: 30px 0;
  width: 100%;
  label {
    width: 100%;
    font-size: larger;
  }
  input {
    width: 100%;
  }
}
</style>
