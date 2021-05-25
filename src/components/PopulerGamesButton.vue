<template>
  <button :class="['populer-games-button', isActive ? 'active' : '']">{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    isActive: Boolean
  }
}
</script>

<style lang="postcss">
  .populer-games-button {
    background-image: url(../assets/images/button_normal.png);
    @apply bg-contain py-5 w-40 bg-no-repeat bg-center focus:outline-none text-gray-500 font-medium hover:opacity-75
  }
  .populer-games-button.active {
    background-image: url(../assets/images/button_active.png);
    filter: drop-shadow(0px 5px 5px rgba(201, 157, 108, 0.9));
    @apply text-white hover:opacity-100
  } 
</style>