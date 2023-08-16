import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://fakestoreapi.com/auth/login',
          credentials
        );
        const token = response.data.token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        console.log(token);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
};

export default auth;