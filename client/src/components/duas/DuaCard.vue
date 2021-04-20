<template>
  <div>
    <div>
      <span>
        <h2>{{ surahNum }}</h2>
      </span>
      <span>
        <h2>{{ surahNameEnglish }} | {{ surahNameTranslation }}</h2>
      </span>
      <span>
        <h2>{{ surahNameArabic }}</h2>
      </span>
    </div>
    <div>
      <dua-card-verse></dua-card-verse>
    </div>
  </div>
</template>

<script>
import DuaCardVerse from './DuaCardVerse.vue';

export default {
  components: {
    DuaCardVerse,
  },
  props: [
    'surahNum',
    'surahNameEnglish',
    'surahNameTranslation',
    'surahNameArabic',
    'englishVerses',
    'urduVerses',
  ],
};
</script>
