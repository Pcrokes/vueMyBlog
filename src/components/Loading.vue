<template>
    <div class="loading-container">
        <img src="../assets/loading.gif" alt="">
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  img {
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
  }
}
</style>
