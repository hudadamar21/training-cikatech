<template >
  <div class="w-full bg-dark-gray py-7 px-16 text-gray-400 text-center">
    <BrandLogos />
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
import BrandLogos from "../components/BrandLogos.vue";

export default {
  components: { BrandLogos, FooterMenuList },
}
</script>