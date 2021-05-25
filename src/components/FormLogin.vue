<template>
  <form @submit.prevent="formSubmit" class="flex items-start gap-3">
    <input type="text" placeholder="Nama pengguna" class="form-input" v-model="nama_pengguna">
    <div class="flex flex-col items-end">
      <input type="password" placeholder="Kata sandi" class="form-input" v-model="password">
      <a href="#" class="text-xs text-gray-500 hover:underline hover:text-brown-200">
        Lupa Kata Sandi
      </a>
    </div>
    <button type="submit" class="form-button">Masuk</button>
    <button class="form-button">Daftar</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, {emit}){
    const nama_pengguna = ref('')
    const password = ref('')

    const formSubmit = () => {
      emit('formsubmit', {
        nama_pengguna: nama_pengguna.value, 
        password: password.value
      })
    }
    return {
      nama_pengguna,
      password,
      formSubmit
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