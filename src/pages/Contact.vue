<template>
    <div class="bg-krem overflow-x-hidden w-screen">
      <HeroContact />
      <MapsnInfo />
    </div>
  </template>
  
  <script>
    import HeroContact from '@/components/HeroContact.vue';
    import MapsnInfo from '@/components/MapsnInfo.vue';

  export default {
    name: 'ContactPage',
    components: {
      HeroContact,
      MapsnInfo
    },
  }
  </script>