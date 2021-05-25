<template>
  <section class="min-h-screen flex flex-col items-center overflow-hidden">
    <h3 class="top-games text-xl font-medium tracking-widest mb-2 text-gray-400">Top Games</h3>
    <div class="h-6 w-full flex items-end gap-10">
      <div class="h-full border-t-[3px] border-r-[16px] border-brown-200 flex-grow transform skew-x-[45deg]"></div>
      <h1 class="text-2xl font-bold text-gray-700">Populer Games</h1>
      <div class="h-full border-t-[3px] border-l-[16px] border-brown-200 flex-grow transform skew-x-[-45deg]"></div>
    </div>
    <p class="my-2 text-gray-600">
      Kami memiliki semua yang Anda inginkan, dan memberi Anda pengalaman bermain yang kaya
    </p>
    <div class="flex items-center justify-evenly w-[85%]">
      <PopulerGamesButton name="OLAHRAGA"/>
      <PopulerGamesButton name="LIVE CASINO"/>
      <PopulerGamesButton name="CATUR"/>
      <PopulerGamesButton name="ESPORT" isActive />
      <PopulerGamesButton name="LOTRE"/>
      <PopulerGamesButton name="SLOT"/>
    </div>
    <FramePopulerGames/>
  </section>
</template>

<script>
import FramePopulerGames from "../components/FramePopulerGames.vue";
import PopulerGamesButton from '../components/PopulerGamesButton.vue';

export default {
  components: { 
    FramePopulerGames, 
    PopulerGamesButton 
  }
}
</script>