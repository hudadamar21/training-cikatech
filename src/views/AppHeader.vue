<template>
  <header class="w-full flex justify-end pr-20 pt-2 bg-white">
    <div class="mr-2 flex items-start gap-2 mr-5">
      <ContactChats />
    </div>
    <FormLogin @formsubmit="SubmitLogin" />
  </header>
</template>

<script>
import FormLogin from '../components/FormLogin.vue';
import ContactChats from '../components/ContactChats.vue';

export default {
  components: { FormLogin, ContactChats },
  setup(){

    const SubmitLogin = (data) => {
      console.log("nama pengguna", data.nama_pengguna)
      console.log("password", data.password)
    }

    return {
      SubmitLogin
    }
  }
}
</script>