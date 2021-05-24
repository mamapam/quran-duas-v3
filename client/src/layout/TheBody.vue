<template>
  <main class="grid">
    <section class="filter-section">
      <div>
        <dua-filter></dua-filter>
      </div>
    </section>
    <section class="dua-section">
      <dua-list></dua-list>
    </section>
  </main>
</template>

<script>
import DuaFilter from '../components/duas/DuaFilter.vue';
import DuaList from '../components/duas/DuaList.vue';

export default {
  name: 'the-body',
  components: {
    DuaFilter,
    DuaList,
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
.grid {
  display: grid;
  grid-template-columns: repeat(24, 1fr);
}

.filter-section,
.dua-section {
  grid-column: 2/24;
  margin-top: 20px;
}

.dua-section {
  height: 75vh;
  overflow-y: auto;
  background-color: #eeeeee;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
}
div {
  flex-grow: 1;
}

@media screen and (min-width: 1024px) {
  .filter-section {
    grid-column: 2/8;
  }

  .dua-section {
    grid-column: 9/24;
  }
}
</style>
