<template>
  <tr>
    <td>{{itemProps.id}}</td>
    <td>{{itemProps.title }}</td>
    <td>{{itemProps.cantidad}}</td>
    <td>
      <button 
        class="btn btn-success btn-sm"
        @click="aumentar(itemProps.id)"
      >
      +
      </button>

      <button 
        class="btn btn-danger btn-sm"
        @click="disminuir(itemProps.id)"
        >
        -
      </button>
    </td>
    <td>${{ Intl.NumberFormat().format(itemProps.precio * itemProps.cantidad )}}</td>
  </tr>
</template>

<script>
import { useStore } from 'vuex';

export default {
  props: {
    itemProps: Object
  },
  setup() {
    const store =  useStore();

    // Donde vamos crear las Acciones que llamen a los mutations
    const aumentar = (id) => {
      store.commit('setAumentar', id)
    }

    const disminuir = (id) => {
       store.commit('setDisminuir', id)
    }
    return {
      aumentar,
      disminuir
    }
  }
}
</script>

<style>

</style>