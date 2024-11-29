<template>
  <section class="notificacao-comentario">
    <Fieldset legend="Comentários">
      {{ visibilityLevel }}
      <Select
        v-model="visibilityLevel"
        :options="optionsList"
        optionLabel="name"
        placeholder="Defina a visibilidade"
        class="w-full md:w-56"
      ></Select>
      <title>teste</title>
    </Fieldset>
  </section>
</template>
<script>
export default {
  name: "MeuComentario",
  modelValue: ["visibilityLevel"],
  data() {
    return {
      optionsList: [
        { id: 1, name: "Público" },
        { id: 2, name: "Privado" },
      ],
      value: 1,
    };
  },
  props: {
    // visibilityLevel: {
    //   type: Number,
    //   required: false,
    // },
  },
};
</script>
