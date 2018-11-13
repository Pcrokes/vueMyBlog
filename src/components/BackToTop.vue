<template>
    <div class="back-to-top" @click="backToTop" role="link" tabindex="0" style="top:-10rem;" v-show="false">
    
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    this.handlePosition()
  },
  methods: {
    backToTop() {
      document.documentElement.scrollTop -= 100
      if (document.documentElement.scrollTop <= 0) {
        window.cancelAnimationFrame(this.backToTop)
      } else {
        window.requestAnimationFrame(this.backToTop)
      }
    },
    handlePosition() {
      const backToTop = $('.back-to-top')
      $(window).on('resize scroll', function() {
        if ($(this).scrollTop() > 800) {
          backToTop.css('top', '-10rem')
        } else {
          backToTop.css('top', '-60rem')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-to-top {
  background: url('../assets/scroll.png') no-repeat 0 0;
  width: 70px;
  height: 900px;
  position: fixed;
  top: -960px;
  right: 25px;
  transition: 600ms all cubic-bezier(0.25, 0.1, 0.3, 1.5);
  animation: float 2s linear infinite;
  outline: none;
}
.back-to-top:hover {
  cursor: pointer;
}
@-webkit-keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
</style>
