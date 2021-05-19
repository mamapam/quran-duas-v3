<template>
  <section>
    <dua-filter :list="filter"></dua-filter>
  </section>
  <section></section>
</template>

<script>
import axios from 'axios';
import DuaFilter from '../duas/DuaFilter.vue';

export default {
  components: {
    DuaFilter,
  },
  data() {
    return {
      isLoading: false,
      isError: null,
      duas: null,
      filter: [],
    };
  },
  methods: {
    async loadDuas() {
      this.isLoading = true;
      try {
        const duas = await axios.get('/api/quran');
        this.duas = duas.data;
        duas.data.forEach((dua) => {
          const surah = {
            id: dua.id,
            name: dua.en[0].surah.englishName,
          };
          this.filter.push(surah);
        });
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
