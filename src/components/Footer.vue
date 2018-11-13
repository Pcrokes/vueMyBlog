<template>
    <div class="footer-container">
        <section class="create-wrapper">
            <p class="create-intro">Brought to you with By Charles Cx</p>
        </section>
        <section class="footer-span">
            <span>Copyright © 2018 Charles All rights reserved.</span>
            <div>
                <a :href="interData" target="_blank">
                    苏ICP备18061362号-1
                </a>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  data() {
    return {
      interData: 'http://www.miitbeian.gov.cn'
    }
  }
}
</script>

<style lang="scss" scoped>
.footer-container {
  font-family: sans-serif;
  width: 50rem;
  max-width: 50rem;
  margin: 1rem auto 1.8rem;
  letter-spacing: 0.025rem;
  .create-wrapper {
    width: 100%;
    padding: 0.3rem 0;
    border-bottom: 1px dashed #666;
    .create-intro {
      font-weight: bold;
      color: #333;
      margin-bottom: 0.2rem;
    }
  }
  .footer-span {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    span,
    a {
      padding: 0.6rem 0;
      color: #666;
      font-size: 0.75rem;
    }
  }
}
</style>
