<template>
  <button type="button" @click="toggleFilter">Filter</button>
  <div class="content" v-if="isFilterShowing">
    <ul>
      <li v-for="surah in list" :key="surah.id">
        <input type="checkbox" :id="surah.id" :value="surah.id" v-model="checkedDuas" />
        <label :for="surah.id">{{ surah.name }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      checkedDuas: [],
      isFilterShowing: false,
    };
  },
  methods: {
    toggleFilter() {
      this.isFilterShowing = !this.isFilterShowing;
    },
  },
};
</script>
