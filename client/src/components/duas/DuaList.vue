<template>
  <div>
    <!-- <dua-card
      v-for="surat in duaList"
      :key="surat.en[0].numberInSurah"
      :surahNum="surat.en[0].numberInSurah"
      :surahNameEnglish="surat.en[0].surah.englishName"
      :surahNameTranslation="surat.en[0].surah.englishNameTranslation"
      :surahNameArabic="surat.en[0].surah.name"
      :verses="surat"
    ></dua-card> -->
    <!-- <p v-for="(surat, index) in duaListArray" :key="index">{{ surat }}</p> -->
    <p>{{ duaList }}</p>
  </div>
</template>

<script>
// import DuaCard from './DuaCard.vue';

export default {
  components: {
    // DuaCard,
  },
  props: ['duaList'],
  // data() {
  //   return {
  //     englishVerses: [],
  //     urduVerses: [],
  //   };
  // },
  computed: {
    duaListArray() {
      // const arr = Object.entries(this.duaList);
      // return arr;
      const arr = [];
      Object.keys(this.duaList).forEach((key) => {
        arr.push(this.duaList[key]);
      });
      return arr;
    },
    // englishVerses() {},
  },
  methods: {
    createKey(surahNum, verseNum) {
      return `${surahNum}_${verseNum}`;
    },
    // createVerseArrays() {

    // }
  },
};
</script>
