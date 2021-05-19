<template>
  <div class="card">
    <div class="titleBar">
      <h2>{{ surahNum }}</h2>
      <h2>{{ surahNameEnglish }} | {{ surahNameTranslation }}</h2>
      <h2 class="arabic">{{ surahNameArabic }}</h2>
    </div>
    <div class="duas">
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
.card {
  height: auto;
  /* overflow: hidden; */
  width: 100%;
  height: max-content;
  padding: 2rem;
}

.titleBar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #114b5f;
  color: white;
  height: 4rem;
}

.duas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

.arabic {
  font-family: 'MeQuran';
}
</style>
