<template>
    <div class="blog-container">
        <main class="blog-wrapper">
            <span class="main-home">
                Code,Music and Life.
            </span>
        </main>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-container {
  width: 100%;
  height: 500px;
  .blog-wrapper {
    width: 100%;
    height: 100%;
    background: url('../assets/blog-bg.jpeg') no-repeat 0 0 fixed;
    background-size: cover;
    .main-home {
      width: 100%;
      position: absolute;
      top: 36%;
      font-family: sans-serif;
      background: linear-gradient(270deg, #c4987a 33%, #ffd5bf 73%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      z-index: 1;
      user-select: none;
      text-align: center;
      letter-spacing: 1rem;
      font-size: 3.5rem;
    }
  }
}
</style>
