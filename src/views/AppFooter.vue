<template >
  <div class="w-full bg-dark-gray py-7 px-16 text-gray-400 text-center">
    <div class="h-1/2 border-b border-gray-700 pb-6 flex items-center justify-center flex-wrap">
      <img v-for="(logo, i) of logos" :key="i" :src="logo" class="h-8 mr-8 mb-2" />
    </div>
    <div class="mt-10 text-center">
      <FooterMenuList />
      <p class="mt-5 text-sm opacity-60 font-semibold">
        Copyright &copy;2021 Reserved
      </p>
    </div>
  </div>
</template>

<script>

import FooterMenuList from '../components/FooterMenuList.vue';
import logos from "../data/logos";

export default {
  components: { FooterMenuList },
  setup(){
    return { logos }
  }
}
</script>