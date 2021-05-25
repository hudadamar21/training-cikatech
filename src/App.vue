<template>
  <AppHeader/>
  <Navbar/>
  <BigImageSlider/>
  <Jackpot/>
  <PopulerGames/>
  <AppFooter/>
</template>

<script>
import AppHeader from "./views/AppHeader.vue";
import Navbar from './views/Navbar.vue'
import BigImageSlider from './views/BigImageSlider.vue'
import Jackpot from './views/Jackpot.vue'
import PopulerGames from './views/PopulerGames.vue'
import AppFooter from './views/AppFooter.vue'
export default {
  components: { 
    AppHeader, 
    Navbar, 
    BigImageSlider, 
    Jackpot, 
    PopulerGames,
    AppFooter
  },

}
</script>

<style>

</style>
