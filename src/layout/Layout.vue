<template>
  <div class="layout">
    <!-- navbar -->
    <Navbar />
    <div class="container mt-5">
      <!-- Donde se van a renderizan nuestros componentes -->
      <slot/>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'layout',
  components: {
    Navbar: defineAsyncComponent(() => import(/*webpackChunkName: "Navbar" */ '@/components/Navbar.vue'))
  }

}
</script>

<style>

</style>