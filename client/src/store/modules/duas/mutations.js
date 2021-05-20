export default {
  setDuas(state, payload) {
    state.duas = payload;
  },
  setListOfDuas(state, payload) {
    state.listOfDuas = payload;
  },
  addToFilter(state, payload) {
    state.filteredList.push(payload);
  },
  removeFromFilter(state, payload) {
    const arr = state.filteredList.filter((id) => id !== payload);
    state.filteredList = arr;
  },
};
