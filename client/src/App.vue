<template>
  <the-header></the-header>
  <base-spinner v-if="isLoading"></base-spinner>
  <div>
    <dua-list :duaList="duas"></dua-list>
  </div>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/layout/TheHeader.vue';
import DuaList from './components/duas/DuaList.vue';

export default {
  components: {
    TheHeader,
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

<style>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&display=swap');
@font-face {
  font-family: 'MeQuran';
  src: local('MeQuran'), url('./assets/fonts/me_quran_2.ttf') format('truetype');
}
@font-face {
  font-family: 'Urdu';
  src: local('Urdu'), url('./assets/fonts/Jameel_1.ttf') format('truetype');
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'EB Garamond', serif;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
