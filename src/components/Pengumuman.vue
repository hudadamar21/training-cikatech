<template>
  <div class="flex items-center w-[90%] py-2 bg-white rounded-3xl shadow-pengumuman border border-brown-200">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-12 mr-5 text-brown-200" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clip-rule="evenodd" />
    </svg>
    <p class="relative pengumuman text-gray-500 whitespace-nowrap mr-10 text-[0.92rem] overflow-hidden">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
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