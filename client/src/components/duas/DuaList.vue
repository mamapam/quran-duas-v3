<template>
  <perfect-scrollbar>
    <div class="duaList">
      <dua-card
        v-for="surat in filteredList"
        :key="surat.id"
        :surahNum="surat.id"
        :surahNameEnglish="surat.en[0].surah.englishName"
        :surahNameTranslation="surat.en[0].surah.englishNameTranslation"
        :surahNameArabic="surat.en[0].surah.name"
        :verses="surat"
      ></dua-card>
    </div>
  </perfect-scrollbar>
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
    filteredList() {
      const filtered = this.$store.getters['duas/filteredList'];

      if (filtered.length === 0) {
        return this.duaList;
      }
      const filteredList = this.duaList.filter((surat) => filtered.includes(surat.id));
      return filteredList;
    },
  },
};
</script>

<style scoped>
.duaList {
  background-color: #eeeeee;
  height: 100%;
  widows: 100%;
  margin: 10px;
}

.ps {
  height: 100%;
}
</style>
