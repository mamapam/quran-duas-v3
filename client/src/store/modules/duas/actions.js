import axios from '../../../axios-config';

export default {
  async loadDuas(context) {
    try {
      const response = await axios.get('/api/quran');

      const duas = response.data;
      const listOfDuas = [];

      duas.forEach((dua) => {
        const surah = {
          id: dua.id,
          name: dua.en[0].surah.englishName,
        };
        listOfDuas.push(surah);
      });

      context.commit('setDuas', duas);
      context.commit('setListOfDuas', listOfDuas);
    } catch (error) {
      console.log(error);
    }
  },
  addToFilter(context, payload) {
    console.log(payload);
    context.commit('addToFilter', payload);
  },
  removeFromFilter(context, payload) {
    console.log(payload);
    context.commit('removeFromFilter', payload);
  },
};
