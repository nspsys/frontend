<style src="./cards.scss" lang="scss"></style>
<template>
  <section class="card-list">
    <Card v-for="child in childs">
      <template #subtitle>{{ child.title }}</template>
      <template #content>
        <p class="m-0">{{ child.value }}</p>
      </template>
    </Card>
  </section>
</template>

<script>
export default {
  name: "Cards",
  props: ["childs"],
};
</script>
