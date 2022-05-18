<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueMarket</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
        </ul>

        <!-- icono del carrito de compras -->
        <router-link class="carrito-container" to="/carrito">

          <div class="carrito-icon">
            <!-- icono -->
            <i class="fas fa-cart-plus"></i>
          </div>

          <div class="counter">
            <div class="counter-number">
              {{ Object.keys(carrito).length}}
            </div>
          </div>

        </router-link>
        <!-- fin de icono del carrito de compras -->
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const carrito = computed(() => store.state.carrito);

    return {
      carrito
    }
  }
};
</script>

<style scoped>
  .navbar {
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  }

  .carrito-container {
    position: relative;
  }

  .carrito-icon {
    font-size: 32px;
    color: #37976c;
    margin-right: 40px;
  }

  .counter {
    position: absolute;
    background-color: tomato;
    color: white;
    padding: 10px;
    border-radius: 50%;
    height: 32px;
    width: 30px;
    top: -8px;
    left: 29px;
  }

  .counter .counter-number {
    position: relative;
    top: -6px;
    /* top: -4px;
    left: -4px; */
  }


</style>