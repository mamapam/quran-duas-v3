<template>
  <section>
    <div class="loader">
      <base-spinner v-if="isLoading"></base-spinner>
    </div>
    <div class="filter"></div>
    <div class="duaListBox">
      <dua-list :duaList="duas"></dua-list>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import DuaList from '../duas/DuaList.vue';

export default {
  components: {
    DuaList,
  },
  data() {
    return {
      isLoading: false,
      isError: null,
      duas: null,
    };
  },
  methods: {
    async loadDuas() {
      this.isLoading = true;
      try {
        const duas = await axios.get('/api/quran');
        this.duas = duas.data;
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
section {
  display: flex;
  height: calc(100vh - 100px);
}

.filter {
  flex: 1;
  border: 1px red solid;
}

.duaListBox {
  flex: 2;
  height: calc(100vh - 8rem);
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
}
</style>
