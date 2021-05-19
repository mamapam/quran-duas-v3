<template>
  <div class="duaList">
    <dua-card
      v-for="surat in duaList"
      :key="surat.id"
      :surahNum="surat.id"
      :surahNameEnglish="surat.en[0].surah.englishName"
      :surahNameTranslation="surat.en[0].surah.englishNameTranslation"
      :surahNameArabic="surat.en[0].surah.name"
      :verses="surat"
    ></dua-card>
  </div>
</template>

<script>
import DuaCard from './DuaCard.vue';

export default {
  components: {
    DuaCard,
  },
  props: ['duaList'],
};
</script>

<style scoped>
.duaList {
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  background-color: #eeeeee;
  /* padding: 2rem; */
  margin: 2rem 2rem;
  /* height: 150px; */
  overflow: auto;
  height: 95%;
}
</style>
