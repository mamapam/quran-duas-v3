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
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.arabic {
  width: 100%;
  display: flex;
}

.arabic img {
  align-self: right;
}

.urdu {
  font-family: 'Urdu';
  align-self: right;
}
</style>
