<template>
    <section
    class="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-center text-white bg-cover bg-center overflow-hidden"
    :style="{ backgroundImage: `url('/src/assets/aboutUs1.jpg')` }"
    >
    <div class="absolute inset-0 bg-coklat/60"></div>
    <div class="relative z-10 px-4">
    <h1 class="text-5xl md:text-4xl lg:text-6xl font-bold font-gupter mb-3 md:mb-4">
        Contact with Us
    </h1>
    <p class="text-xl md:text-2xl lg:text-2xl mb-6 font-gupter">
        Let;s Work Together!
    </p>
    </div>
    </section>
  </template>
  
  <script>
    export default {
        name: 'HeroContact'
    }
  </script>