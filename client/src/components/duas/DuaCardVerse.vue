<template>
  <div>
    <div>
      <img src="arabic" alt="Arabic verse" />
    </div>
    <p>{{ english }}</p>
    <p class="urdu">{{ urdu }}</p>
  </div>
</template>

<script>
export default {
  props: {
    arabic: {
      type: String,
      required: true,
    },
    english: {
      type: String,
      required: true,
    },
    urdu: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.urdu {
  font-family: 'Urdu';
}
</style>
