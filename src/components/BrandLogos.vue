<template>
  <div class="border-b border-gray-700 pb-6 flex items-center justify-center flex-wrap">
    <img v-for="(logo, i) of brand_Logos" :key="i" :src="logo" class="h-8 mr-8 mb-2" />
  </div>
</template>

<script>
import brand_Logos from "../data/brand_logos";

export default {
  setup(){
    return { brand_Logos }
  }
}
</script>

<style>

</style>