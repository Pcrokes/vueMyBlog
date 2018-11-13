<template>
  <div id="app">
    <div>
      <Header></Header>
      <keep-alive>
        <router-view/>
      </keep-alive>    
    </div>
    <BackToTop></BackToTop>
    <ScrollProgress></ScrollProgress>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollProgress from './components/ScrollProgress'
export default {
  components: {
    Header,
    Footer,
    BackToTop,
    ScrollProgress
  }
}
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: rgba(58, 58, 58, 0.6);
}
</style>