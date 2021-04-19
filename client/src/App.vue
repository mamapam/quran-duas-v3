<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
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
