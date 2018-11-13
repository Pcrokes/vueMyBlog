<template>
    <div class="life-container">
        <main class="life-wrapper">
            <h1>Life</h1>
        </main>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.life-container {
  width: 100%;
  height: 500px;
  .life-wrapper {
    width: 100%;
    height: 100%;
    background: url('../assets/archive-bg.jpg') 0 0 fixed;
    background-size: cover;
    h1 {
      width: 100%;
      position: absolute;
      top: 36%;
      font-family: sans-serif;
      background: linear-gradient(270deg, #dbdad8 33%, #f7e0d3 73%);
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
