<template>
  <div class="verses">
    <div class="arabic">
      <img :src="imageSrc" alt="Arabic verse" />
    </div>
    <p class="urdu">{{ urdu }}</p>
    <p class="english">{{ english }}</p>
  </div>
</template>

<script>
export default {
  props: {
    english: {
      type: String,
      required: true,
    },
    urdu: {
      type: String,
      required: true,
    },
    surahNum: {
      type: Number,
      required: true,
    },
    verseNum: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      return require(`../../assets/quran/${this.surahNum}_${this.verseNum}.png`);
    },
  },
};
</script>

<style scoped>
.verses {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.arabic img {
  width: 95%;
  max-width: 600px;
}

.urdu {
  font-family: 'Urdu';
  text-align: right;
  margin: 10px;
  font-size: 1.2em;
}

.english {
  margin-bottom: 10px;
}
</style>
