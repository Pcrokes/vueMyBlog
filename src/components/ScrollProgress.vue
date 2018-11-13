<template>
    <div class="scroll-progress">

    </div>
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    this.handleScrollProgress()
  },
  methods: {
    handleScrollProgress() {
      $(window).on('resize scroll', function() {
        const totalHeight = $(document).height()
        const viewPortHeight = $(window).height()
        const ratio =
          ($(this).scrollTop() / (totalHeight - viewPortHeight)) * 100
        $('.scroll-progress').css('width', `${ratio}%`)
      })
    }
  }
}
</script>

<style scoped>
.scroll-progress {
  height: 3px;
  width: 0;
  background: #ffa500;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
