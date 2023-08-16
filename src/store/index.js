import { createStore } from 'vuex';
import auth from './modules/auth';




const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    
  },
});

export default store;