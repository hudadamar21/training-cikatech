<template>
  <a 
    v-for="(list, index) of lists" 
    :key="index" 
    :href="list.to"
    class="font-semibold hover:underline"
  >
    {{ list.name}}<span v-if="index !== lists.length - 1" class="px-3">|</span>
  </a>
</template>

<script>
import { reactive } from "vue";
export default {
  setup(){
    const lists = reactive([
      { name: 'Tanya Jawab', to: '#'},
      { name: 'Permainan Bertanggung Jawab', to: '#'},
      { name: 'Kebijakan Privasi', to: '#'},
      { name: 'Aturan dan Ketentuan', to: '#'},
      { name: 'Hubungi Kami', to: '#'},
      { name: 'Afiliasi', to: '#'},
      { name: 'Plugin Anti Hack', to: '#'},
    ])

    return {
      lists
    }
  }
}
</script>