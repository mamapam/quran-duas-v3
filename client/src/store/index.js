import { createStore } from 'vuex';

import duasModule from './modules/duas/index';

const store = createStore({
  modules: {
    duas: duasModule,
  },
});

export default store;
