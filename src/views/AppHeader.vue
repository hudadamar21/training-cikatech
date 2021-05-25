<template>
  <header class="w-full flex justify-end pr-20 pt-2 bg-white">
    <div class="mr-2 flex items-start gap-2 mr-5">
      <img 
        v-for="{name, src} of chat_logos" 
        :key="name" 
        :src="src" 
        class="w-7 h-7 cursor-pointer filter hover:brightness-125" 
        :alt="name"
      />
    </div>
    <FormLogin @formsubmit="SubmitLogin"/>
  </header>
</template>

<script>
import { reactive } from 'vue'

import whatsapp from "../assets/icons/whatsapp.svg";
import line from "../assets/icons/line.svg";
import telegram from "../assets/icons/telegram.svg";
import FormLogin from '../components/FormLogin.vue';

export default {
  components: { FormLogin },
  setup(){
    const chat_logos = reactive([
      { name: 'Whatsapp Logo', src: whatsapp },
      { name: 'Line Logo', src: line },
      { name: 'Telegram Logo', src: telegram }
    ])

    const SubmitLogin = (data) => {
      console.log(data.nama_pengguna, data.password)
    }

    return {
      chat_logos,
      SubmitLogin
    }
  }
}
</script>

<style lang="postcss">
  .form-input {
    @apply px-3 py-1 w-36 text-sm rounded border border-gray-500 focus:outline-none focus:ring-2 ring-brown-200 ring-opacity-30
  }
  .form-button {
    @apply px-3 py-0.5 rounded-3xl bg-gradient-to-r from-brown-100 to-brown-200 text-white bg-opacity-50 filter hover:brightness-110 focus:outline-none
  }
</style>