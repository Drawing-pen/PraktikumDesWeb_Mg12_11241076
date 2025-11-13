<template>
    <div class="bg-krem overflow-x-hidden w-screen">
      <HeroSection />
      <OverviewSection />
    </div>
  </template>
  
  <script>
    import OverviewSection from '@/components/OverviewSection.vue';
    import HeroSection from '../components/HeroSection.vue';

  export default {
    name: 'HomePage',
    components: {
      HeroSection,
      OverviewSection
    },
  }
  </script>
