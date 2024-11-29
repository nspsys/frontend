<style src="./grid.scss" lang="scss"></style>
<template>
  <DataTable
    :value="rows"
    paginator
    :rows="5"
    :rowsPerPageOptions="[5, 10, 20, 50]"
    tableStyle="min-width: 50rem"
    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
    currentPageReportTemplate="{first} to {last} of {totalRecords}"
    sortMode="multiple"
    @row-click="rowClick"
  >
    <template #paginatorstart>
      <Button type="button" icon="pi pi-refresh" text />
    </template>
    <template #paginatorend>
      <Button type="button" icon="pi pi-download" text />
    </template>
    <Column v-for="f in fields" :field="f.field" :header="f.header"></Column>
  </DataTable>
</template>

<script>
export default {
  name: "Grid",
  props: {
    fields: {
      type: Array,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    fnClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    rowClick(e) {
      this.fnClick(e);
    },
  },
};
</script>
