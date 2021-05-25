<template>
  <nav class="h-16 px-20 flex items-center justify-between bg-white">
    <div class="mr-10 mb-3">
      <h1 class="text-4xl font-bold text-brown-200">LOGO</h1>
    </div>
    <ul class="h-full flex-grow flex items-center justify-evenly">
      <li class="nav-list">HOME</li>
      <li class="nav-list">SLOT</li>
      <li class="nav-list">LIVE CASINO</li>
      <li class="nav-list">OLAHRAGA</li>
      <li class="nav-list">POKER</li>
      <li class="nav-list">TEMBAK IKAN</li>
      <li class="nav-list">CARD GAMES</li>
      <li class="nav-list">LOTRE</li>
      <li class="nav-list">ESPORT</li>
      <li class="nav-list">PROMOSI</li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
  .nav-list {
    @apply h-full flex items-center text-sm hover:text-brown-200 border-b-4 border-transparent hover:border-brown-100 cursor-pointer
  }
</style>