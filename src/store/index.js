import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload
    },
    setCarrito(state, payload) {
      state.carrito[payload.id] = payload;
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
    },
    agregarAlCarrito({commit, state}, producto) {
      // hasOwnProperty devuelve un booleano indicado si existe una propiedad especifica en el objeto
      state.carrito.hasOwnProperty(producto.id)? producto.cantidad = state.carrito[producto.id].cantidad + 1:producto.cantidad=1;
      commit('setCarrito', producto);
    }
  },
  getters: {
  },
  modules: {
  }
})
