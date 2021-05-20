<template>
  <button type="button" @click="toggleFilter">
    <span>Filter</span>
    <span class="icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1
          0 102 0v-2h2a1 1 0 100-2h-2V7z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  </button>
  <transition name="fade-in">
    <div class="content" v-if="isFilterShowing">
      <ul>
        <li v-for="surah in list" :key="surah.id">
          <input
            type="checkbox"
            :id="surah.id"
            :value="surah.id"
            @change="filterStatus(surah.id, $event)"
          />
          <label :for="surah.id">{{ surah.name }}</label>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'dua-filter',
  data() {
    return {
      isFilterShowing: false,
      checkedDuas: [],
    };
  },
  computed: {
    list() {
      const listOfDuas = this.$store.getters['duas/listOfDuas'];
      return listOfDuas;
    },
  },
  methods: {
    toggleFilter() {
      this.isFilterShowing = !this.isFilterShowing;
    },
    filterStatus(id, event) {
      if (event.target.checked) {
        console.log('called add');
        this.$store.dispatch('duas/addToFilter', id);
      } else {
        console.log('called remove');
        this.$store.dispatch('duas/removeFromFilter', id);
      }
    },
  },
};
</script>

<style scoped>
button {
  width: 100%;
  color: white;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.3em;
  background-color: #114b5f;
  padding: 10px;
  font-family: inherit;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

svg {
  width: 20px;
  height: 20px;
}

.icon {
  display: flex;
  align-items: center;
}

.content {
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
  padding: 10px;
  overflow-y: auto;
  height: 150px;
}

ul {
  list-style: none;
}

input {
  margin: 0 10px;
}

.fade-in-enter-active {
  transition: all 0.2s ease-in-out;
}

.fade-in-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
</style>
