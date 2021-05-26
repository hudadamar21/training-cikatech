<template>
  <img 
    v-for="{name, src} of contact_chats" 
    :key="name" 
    :src="src" 
    class="w-7 h-7 cursor-pointer filter hover:brightness-125" 
    :alt="name"
  />
</template>

<script>
import { reactive } from 'vue'

import whatsapp from "../assets/icons/whatsapp.svg";
import line from "../assets/icons/line.svg";
import telegram from "../assets/icons/telegram.svg";

export default {
  setup(){
    const contact_chats = reactive([
      { name: 'Whatsapp Logo', src: whatsapp },
      { name: 'Line Logo', src: line },
      { name: 'Telegram Logo', src: telegram }
    ])

    return {
      contact_chats
    }
  }
}
</script>