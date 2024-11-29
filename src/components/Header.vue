<template>
  <div class="card">
    <Toolbar>
      <template #start>
        <img alt="nsp" :src="img_path" class="logotipo" />
        <RouterLink to="/"
          ><Button label="Início" to="/" text plain
        /></RouterLink>
        <RouterLink to="/notificacoes"
          ><Button label="Notificações" to="/notificacoes" text plain
        /></RouterLink>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2">
          <TieredMenu :model="items" popup ref="menu" />
          <Button @click="showMenu">
            <i class="pi pi-user" style="font-size: 2.5rem"></i>
          </Button>
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Header",
  setup() {
    const store = useStore();

    const logout = () => {
      store.dispatch("AcessarStore/logout");
    };

    const menu = ref(null);
    const items = [
      {
        icon: "pi pi-power-off",
        label: "Sair",
        command: logout,
      },
    ];

    const showMenu = (event) => {
      menu.value.toggle(event);
    };

    return {
      items,
      showMenu,
      menu,
    };
  },
  data() {
    return {
      img_path: "/nsp.svg",
    };
  },
  props: [],
};
</script>

<style lang="scss">
.avatar {
  width: 50px;
  height: 50px;
}
.logotipo {
  height: 70px;
  width: auto;
}
</style>
