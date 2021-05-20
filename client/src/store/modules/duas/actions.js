import axios from 'axios';

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
};
