<template>
   <article class="blog-summary-container">
           <div class="blog-thumb-wrapper animated fadeInLeft">
               <img src="../assets/blog-bg.jpeg" class="img"  alt="">
           </div>
            <div class="blog-info animated fadeInRight">
                <p class="publish-date">
                    <i class="icon iconfont icon-shijian"></i>
                    Released 
                    {{date}} 
                </p>
                <h3 class="publish-title">
                    NPM换源
                </h3>
                <div class="extra-info">
                    <span class="click-num" v-for="val in blogInfo" :key="val.id">
                        <i class="icon iconfont" :class="val.class"></i>
                        {{val.value}}
                        {{val.name}}
                    </span>
                </div>
                <p class="summary-content">
                    在公司设置了内网的NPM源，结果到了家之后发现无法下载，
                    为了避免麻烦，可以临时切换到淘宝镜像或者官方镜像，下
                    面将这些操作总结一下。
                </p>
                <div class="show-detail-wrapper">
                    <i class="icon iconfont icon-more"></i>
                </div>
            </div>
   </article>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      blogInfo: [
        { id: 1, value: '1', class: 'icon-guankan', name: 'PV' },
        { id: 2, value: '2', class: 'icon-liuyan', name: 'Likes' },
        { id: 3, value: '3', class: 'icon-iconset0196', name: 'JavaScript' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-summary-container {
  font-family: sans-serif;
  display: flex;
  max-width: 50rem;
  height: 15rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 20px -8px rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  .blog-thumb-wrapper {
    flex: 1;
    overflow: hidden;
    width: 100%;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .blog-info {
    flex: 1;
    padding: 1rem 1.8rem;
    .publish-date {
      font-size: 0.9rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1rem 0;
    }
    .publish-title {
      color: #504e4e;
      font-size: 1.2rem;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 1rem 0;
    }
    .extra-info {
      display: flex;
      justify-content: space-between;
      width: 100%;
      font-size: 0.9rem;
      color: #888;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .summary-content {
      color: #666;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
      font-size: 0.9rem;
      line-height: 1.2;
      overflow: hidden;
      padding: 0.6rem 0;
    }
    .show-detail-wrapper {
      padding: 1rem 0;
      i {
        display: block;
        width: 1.4rem;
        height: 1.4rem;
      }
    }
  }
}
</style>
