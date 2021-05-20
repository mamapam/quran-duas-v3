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
  computed: {
    duaList() {
      const duaList = this.$store.getters['duas/duas'];
      return duaList;
    },
  },
};
</script>
