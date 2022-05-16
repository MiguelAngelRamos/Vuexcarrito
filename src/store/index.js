import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    }
  },
  actions: {
    async getProductosApi({commit}) {
      try {
        const response = await fetch('api.json');
        const data  = await response.json();
        commit('setProductos', data);

      } catch (error) {
        throw error;
      }
    }
  },
  getters: {
  },
  modules: {
  }
})
