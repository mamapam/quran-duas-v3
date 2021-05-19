<template>
  <the-header></the-header>
  <the-body> </the-body>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheBody from './components/layout/TheBody.vue';

export default {
  components: {
    TheHeader,
    TheBody,
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

html {
  font-family: 'EB Garamond', serif;
}

body,
p,
a,
ul,
li {
  padding: 0;
  margin: 0;
}
</style>
