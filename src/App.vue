<template>
  <div id ="app">
    <NavBar />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components:{
    NavBar,
    Footer,
  }
}
</script>