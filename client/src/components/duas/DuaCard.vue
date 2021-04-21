<template>
  <div>
    <div>
      <h2>{{ surahNum }}</h2>

      <h2>{{ surahNameEnglish }} | {{ surahNameTranslation }}</h2>

      <h2 class="arabic">{{ surahNameArabic }}</h2>
    </div>
    <div>
      <dua-card-verse
        v-for="(verse, index) in verses.en"
        :key="verse.number"
        :english="verse.text"
        :urdu="verses.ur[index].text"
        :surahNum="verse.surah.number"
        :verseNum="verse.numberInSurah"
      ></dua-card-verse>
    </div>
  </div>
</template>

<script>
import DuaCardVerse from './DuaCardVerse.vue';

export default {
  components: {
    DuaCardVerse,
  },
  props: ['surahNum', 'surahNameEnglish', 'surahNameTranslation', 'surahNameArabic', 'verses'],
};
</script>

<style scoped>
.arabic {
  font-family: 'MeQuran';
}
</style>
