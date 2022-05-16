<template>
 <Layout>
   <h3>Productos de la tienda</h3>
   <div class="row d-flex justify-content-between">
     <CardProducto 
      v-for="producto of getProductos" 
      :key="producto.id"
      :productoCard="producto"
     />
   </div>
 </Layout>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
export default {
  name: 'HomeView',
  components: {
    Layout: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/layout/Layout.vue")),
    CardProducto: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/components/CardProducto.vue"))
  },
  setup() {
    const store = useStore(); // ya tenemos acceso a la store

    onMounted( () => {
      store.dispatch('getProductosApi');
    });

    // vamos a mapear el state
    const getProductos = computed(() => store.state.productos);

    return {
      getProductos
    }

  }
  
}
</script>
