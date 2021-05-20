<template>
  <section class="filter-section">
    <dua-filter></dua-filter>
  </section>
  <section class="dua-section"></section>
</template>

<script>
import DuaFilter from '../components/duas/DuaFilter.vue';

export default {
  name: 'the-body',
  components: {
    DuaFilter,
  },
  data() {
    return {
      isLoading: false,
      isError: null,
    };
  },
  methods: {
    async loadDuas() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('duas/loadDuas');
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
  },
  created() {
    this.loadDuas();
  },
};
</script>

<style scoped>
.filter-section {
  width: 95%;
  margin: 20px auto;
}
</style>
