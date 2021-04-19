<template>
  <the-header></the-header>
  <base-spinner v-if="isLoading"></base-spinner>
</template>

<script>
import axios from 'axios';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
}
</style>
