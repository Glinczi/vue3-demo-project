<template>
  <div class="home-view">
    <!-- 页头 -->
    <div class="header">
      <div class="center">
        <!-- 页头的导航栏 -->
        <div class="header_nav">
          <div class="right_header"></div>
        </div>
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

  onMounted(()=>{
    // console.log(window.iNoBounce.isEnabled())
  })
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}

.header {
  background-color: rgba(0, 0, 0, 0.7);
  height: 60px;
}

.center {
  width: 1080px;
  margin: 0 auto;
}

/* 主页导航栏 */
.header_nav {
  text-align: right;
  height: 60px;
}

.right_header {
  float: right;
  height: 30px;
  line-height: 30px;
  margin: 15px 0;
}

.header_nav .right_header a {
  display: inline-block;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
}

.header_nav a:hover {
  border-bottom: 2px solid white;
}

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

/* 上方搜索栏 */
.upper {
  height: 400px;
  overflow: hidden;
  margin: 0 auto;

  /* 搜索栏下方图片 */
  background-image: url(../assets/search-baci.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 40%;

  position: relative;
}

#location {
  display: block;
  outline: none;
  box-sizing: border-box;
  height: 60px;
  width: 763px;
  border: 0;
  border-radius: 30px;
  padding: 12px 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);

  /* 居中 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
