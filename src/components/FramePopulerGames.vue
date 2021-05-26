<template>
  <div class="h-screen w-full px-16 py-10">
    <div class="frame w-full h-full p-16 flex items-center justify-center gap-5">
      <div class="w-[60%]">
        <img src="../assets/images/all-games.png" alt="">
      </div>
      <div class="w-[40%] self-start text-left text-gray-500">
        <h1 class="text-4xl font-bold text-brown-200">E-SPORTS</h1>
        <p class="py-5 text-sm font-medium">Menyediakan semua pertandingan yang sangat besar, dan pemain dapat menantikan lebih dari seratus game dengan puluhan ribu rintangan setiap bulan! Dengan visual antarmuka yang menakjubkan dan pengalaman pengguna yang efisien, ini memungkinkan Anda untuk memulai dengan mudah, memahami dalam waktu yang singkat, dan bertaruh atau bermain dengan mudah.</p>
        <div class="text-center inline-block">
          <button class="frame-button w-28 h-28 pb-2 focus:outline-none hover:opacity-90">
            <div class="w-7 h-7 bg-gradient-to-r from-brown-200 to-yellow-100 inline-block rounded"></div>
          </button>
          <p class="-mt-2">IMONE</p>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
  .frame {
    background-image: url(../assets/images/frame_center.png);
    @apply relative bg-contain bg-center
  }
  .frame:after {
    content: '';
    background-image: url(../assets/images/frame_top.png);
    @apply absolute left-0 -top-5 w-full h-5 bg-cover bg-top bg-no-repeat bg-gray-100 z-10
  }
  .frame:before {
    content: '';
    background-image: url(../assets/images/frame_bottom.png);
    @apply absolute left-0 -bottom-5 w-full h-5 bg-cover bg-bottom bg-no-repeat bg-gray-100 z-10
  }
  .frame-button {
    background-image: url(../assets/images/spec_normal.png);
    @apply bg-contain bg-center
  }
</style>