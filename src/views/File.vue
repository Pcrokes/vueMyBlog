<template>
    <div class="file-container">
       <main class="file-wrapper">
            <h1>归档文件</h1>
        </main>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.file-container {
  width: 100%;
  height: 500px;
  .file-wrapper {
    width: 100%;
    height: 100%;
    background: url('../assets/file-bg.jpeg') no-repeat 0 0 fixed;
    background-size: cover;
    h1 {
      width: 100%;
      position: absolute;
      top: 36%;
      font-family: sans-serif;
      background: linear-gradient(270deg, #222120 33%, #0a0502 73%);
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
