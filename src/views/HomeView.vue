<template>
 <Layout>
   <h3>Producto de la tienda</h3>
   <div class="row">
     
   </div>
 </Layout>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  name: 'HomeView',
  components: {
    Layout: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/layout/Layout.vue"))
  }
}
</script>
