<template>
  <section class="w-full flex flex-col items-center mb-10">
     <!-- Big Slider Image -->
    <div class="h-[75vh] w-full bg-blue-300 overflow-hidden">
      <img src="../assets/images/pubg.jpg" class="object-cover w-full" alt="">
    </div>
    <!-- pengumunan -->
    <Pengumuman text="harap hubungi Customer Services. Untuk pastikan nomor rekening tujuan deposit. Apabila terdapat kesalahan tujuan rekening. Kami tidak bertanggung jawab. TERIMA KASIH" />
  </section>
</template>

<script>
import Pengumuman from "../components/Pengumuman.vue";
export default {
  components: {
    Pengumuman
  }
}
</script>

<style lang="postcss">
  .pengumuman:after {
    content: '';
    @apply absolute top-0 -right-5 bg-white w-7 h-full filter blur
  }
  .pengumuman::before {
    content: '';
    @apply absolute top-0 -left-5 bg-white w-7 h-full filter blur
  }
  .shadow-pengumuman {
    box-shadow: 0 2px 5px 1px rgba(201, 157, 108, 0.3);
  }
</style>