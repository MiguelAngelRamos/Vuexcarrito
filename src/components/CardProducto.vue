<template>
  <div class="mt-2 card">
    <img class="mt-2 card-img-top" :src="productoCard.image" alt="producto">

    <div class="card-body">
      <h5 class="card-title"></h5>
      <span class="text-center">${{ Intl.NumberFormat().format(productoCard.precio)}}</span>
    </div>

    <button 
      class="btn btn-success mb-2"
      @click="agregar(productoCard)"
    >
    Agregar al Carrito
    </button>
  </div>
</template>

<script>
import {useStore} from 'vuex';

export default {
  props: {
    productoCard: Object
  },
  setup() {
    const store = useStore(); // acceder al store

    // methods
    const agregar = (producto) => {
      store.dispatch('agregarAlCarrito', producto);
    }

    return {
      agregar
    }
  }

}
</script>

<style scoped>
  .card {
    width: 18rem;
  }

  img {
    width: 270px;
    height: 240px;
  }
  span {
    font-size: 24px;
    font-weight: 600;
  }
</style>