<template>
    <header class="header-container">
        <router-link to="/" class="logo">Charles Official Blog</router-link>
        <nav class="nav-wrapper">
            <ul>
                <li v-for="v in list" :key="v.id" class="nav-item-li">
                    <i class="nav-i icon iconfont " :class="v.cla"></i>
                    <router-link :to="v.to" class="nav-item">{{v.value}}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      list: [
        { id: 1, cla: 'icon-01f', value: '主页', to: '/' },
        { id: 2, cla: 'icon-blogger', value: '博客', to: '/blog' },
        { id: 3, cla: 'icon-archive', value: '生活琐事', to: '/life' },
        { id: 4, cla: 'icon-shenghuo', value: '归档', to: '/file' },
        { id: 5, cla: 'icon-icv', value: '关于我', to: '/cv' },
        { id: 6, cla: 'icon-tubiao11', value: 'search', to: '/search' }
      ]
    }
  },
  mounted() {
    this.SwitchNavBarBgColor()
  },
  methods: {
    SwitchNavBarBgColor() {
      $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0) {
          $('header').addClass('changeBgColor')
        } else {
          $('header').removeClass('changeBgColor')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 94%;
  height: 3.52rem;
  line-height: 3.52rem;
  padding: 0.5rem 3%;
  display: flex;
  z-index: 2;
  background: transparent;
  transition: all 0.4s ease;
  .logo {
    flex: 2;
    width: 14rem;
    margin-left: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .logo::before {
    content: '';
    display: inline-block;
    width: 3rem;
    height: 3rem;
    background: url('../assets/logo.png') no-repeat top;
    background-size: 100% 100%;
    margin-right: 1.2rem;
    vertical-align: middle;
  }
  .nav-wrapper {
    flex: 9;
    margin-right: 1.2rem;
    display: flex;
    justify-content: flex-end;

    .nav-item-li {
      position: relative;
      display: inline-block;
      margin-right: 1.4rem;
      padding-right: 0.2rem;
      cursor: pointer;
      transition: all 0.2s ease;
      .nav-i {
        color: #666;
      }
      .nav-item {
        display: inline-block;
        padding: 0 1.5rem;
        height: 3.52rem;
        line-height: 3.52rem;
        color: #666;
        text-align: center;
      }
    }
    .nav-item-li:hover {
      border-bottom: 3px rgb(247, 175, 19) solid;
    }
  }
}
.header-container:hover {
  background-color: #fff;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.3);
}
.changeBgColor {
  background-color: #fff;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.3);
}
</style>
