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
    },
    
    setAumentar(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
    },
    setDisminuir(state, payload) {
      state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;

      if(state.carrito[payload].cantidad == 0 ) {
        delete state.carrito[payload]
      }
    },
    setCancelarOrden(state) {
      state.carrito = {};
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
    totalCantidad(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad }) => acc + cantidad, 0);
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, { cantidad, precio }) => acc + (cantidad * precio), 0);
    }
  },
  modules: {
  }
})
