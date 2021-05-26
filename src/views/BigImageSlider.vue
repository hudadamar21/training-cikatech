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