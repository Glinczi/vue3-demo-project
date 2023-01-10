<template>
  <div class="home-view">
    <!-- 页头 -->
    <div class="header w-100% bg-no-repeat h-100vh bg-black">
      <div class="center h-100px c-white bg-black">
        <!-- 页头的导航栏 -->
        <div
          class="header_nav w-80% h-100% flex justify-between items-center m-auto"
        >
          <div class="left-title">My WebSite</div>
          <div class="right-nav-btn flex justify-evenly items-center">
            <div class="hover-c-red">Home</div>
            <div class="hover-c-red m-l-10px">About</div>
            <div class="hover-c-red m-l-10px">Content</div>
            <div class="hover-c-red m-l-10px">Servies</div>
          </div>
        </div>
      </div>
      <div class="homeView-info">
        <div class="homeView-title">Welcome To My Website</div>
        <div class="homeView-description">This is a description</div>
      </div>
    </div>

    <!-- 页头下方导航栏 -->
    <div class="header-lists">
      <div class="center">
        <div class="lists">
          <RouterLink to="/createFile">新建文件</RouterLink>
          <RouterLink to="/snowFall">雪花</RouterLink>
          <RouterLink to="/TomatoClock">番茄时钟</RouterLink>
          <RouterLink to="/VisualCss">可视化CSS</RouterLink>
          <RouterLink to="/RandomQuote">RandomQuote</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue-demi";

onMounted(() => {
  // console.log(window.iNoBounce.isEnabled())
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

.header {
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url(../assets/bg-img.webp);
  background-position: center;
  background-size: cover;
}

/* 主页导航栏 */

/* 页头下方导航栏 */

.lists {
  margin: 32px 0 24px;
  display: flex;
  justify-content: space-evenly;
}

.lists a {
  box-sizing: border-box;
  width: 185px;
  height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;

  transition: background-color 1s, color 1s;
}

.lists a:hover {
  background-color: black;
  color: white;
}

/* 主内容区 */
</style>
