<template>
  <section class="flex flex-col items-center mb-16">
    <h1 class="text-7xl font-bold text-brown-200 mb-10">JACKPOT</h1>
    <div class="flex items-center justify-center text-6xl font-bold">
      <h1 class="mr-2 text-brown-200">IDR</h1>
      <div class="text-gray-600">
        <template v-for="num of jackpotCounterArray" :key="num">
          <span 
            v-if="num !== ',' && num !== '.'"
            class="card-price"
          >{{ num }}
          </span>
          <span v-else >{{ num }}</span>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup(){
    const jackpotCounter = ref('40,421,048,465.05')
    const jackpotCounterArray = computed(() => jackpotCounter.value.split(''))

    return { jackpotCounterArray }
  }
}
</script>

<style lang="postcss">
  .card-price {
    background-image: url(../assets/images/jackpot_counter.png);
    @apply w-auto h-auto bg-contain bg-no-repeat bg-center px-5 pb-5 pt-3
  }
</style>