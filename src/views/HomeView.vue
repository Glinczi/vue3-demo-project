<template>
  <div>
    <div class="home-view">
      <!-- 页头 -->
      <div class="header w-100% bg-no-repeat h-100vh bg-black">
        <div class="fixed center w-100% z-10">
          <!-- 页头的导航栏 -->
          <div
            class="header_nav w-80% h-100% flex justify-between items-center m-auto"
          >
            <div class="left-title flex items-center">
              <div class="toggle-list m-r-10px z-2" @click.capture="showList">
                <span></span>
              </div>
              <div>My WebSite</div>
            </div>
            <div class="right-nav-btn flex justify-evenly items-center h-100%">
              <div class="hover-c-red">Home</div>
              <div class="hover-c-red m-l-10px">About</div>
              <div class="hover-c-red m-l-10px">Content</div>
              <div class="hover-c-red m-l-10px">Servies</div>
            </div>
          </div>
        </div>
        <div class="homeView-info color-#fff p-t-300px relative">
          <div class="homeView-title text-center">Website Title</div>
          <div class="homeView-description text-center">
            This is a description
          </div>
          <svg
            width="400"
            height="200"
            class="svg-item absolute bg-transparent showing"
          >
            <path
              id="svg_1"
              d="m100.5,102.05c98,22 204,-41 203.5,-41.05"
              opacity="1"
              stroke-width="10"
              stroke="#66b395"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    </div>
    <Transition name="sideMean">
      <div
        class="side-list fixed top-0 left-0 w-200px h-100vh bg-light-50"
        v-show="showSideList"
      >
        <div class="header-lists">
          <div class="center">
            <div class="lists">
              <RouterLink to="/createFile">新建文件</RouterLink>
              <RouterLink to="/snowFall">雪花</RouterLink>
              <RouterLink to="/TomatoClock">番茄时钟</RouterLink>
              <RouterLink to="/VisualCss">可视化CSS</RouterLink>
              <RouterLink to="/RandomQuote">RandomQuote</RouterLink>
              <RouterLink to="/randomChoice">randomChoice</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- 页头下方导航栏 -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue-demi";
import { throttle } from "@/utils/index";

const showSideList = ref(false);

onMounted(() => {
  svg_1.classList.add("showing");
  // window.addEventListener("scroll", setStyle);
});

//
const setStyle = throttle(function () {
  let htmlNode = document.documentElement;
  let centerNode = document.querySelector(".center");
  let svg_1 = document.querySelector("#svg_1");
  // 当页面滚动到100px
  if (htmlNode.scrollTop >= 100) {
    svg_1.classList.add("showing");
    centerNode.style.setProperty("--fixed-height", "80px");
    centerNode.style.setProperty("--fixed-background-color", "#fff");
    centerNode.style.setProperty("--fixed-color", "black");
  } else if (htmlNode.scrollTop <= 10) {
    centerNode.style.setProperty("--fixed-height", "100px");
    centerNode.style.setProperty(
      "--fixed-background-color",
      "rgba(0, 0, 0, 0.7)"
    );
    centerNode.style.setProperty("--fixed-color", "#fff");
  }
}, 200);

// 控制侧边菜单栏展开和隐藏
function showList(event) {
  const el =
    event.target.nodeName == "SPAN" ? event.target.parentNode : event.target;
  console.log(el.classList);
  if (el.classList.value.indexOf("toggle-on") == -1) {
    el.classList.add("toggle-on");
    showSideList.value = true;
  } else {
    el.classList.remove("toggle-on");
    showSideList.value = false;
  }
}
</script>

<style lang="scss" scoped>
@import url(@/assets/main.css);
@keyframes show {
  0% {
    stroke-dashoffset: 200px;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
a {
  text-decoration: none;
  color: black;
}

.header {
  background-image: url(../assets/bg-img.webp);
  background-position: center;
  background-size: cover;
  .header_nav {
    .left-title {
      .toggle-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 30px;
        height: 30px;
        span {
          display: inline-block;
          width: 30px;
          height: 4px;
          background-color: #fff;
          border-radius: 1px;
        }
        &::after {
          content: "";
          display: block;
          width: 30px;
          height: 4px;
          border-radius: 1px;
          background-color: #fff;
          transition: all 0.5s linear;
        }
        &::before {
          content: "";
          display: block;
          width: 30px;
          height: 4px;
          border: radius 1px;
          background-color: #fff;
          transition: all 0.5s ease;
        }
        &.toggle-on {
          span {
            display: none;
          }
          &::after {
            content: "";
            display: block;
            height: 4px;
            border-radius: 1px;
            background-color: #fff;
            transition: all 0.5s ease;
            transform-origin: left;
            transform: rotate(-45deg);
            width: 36px;
          }
          &::before {
            content: "";
            display: block;
            height: 4px;
            border: radius 1px;
            background-color: #fff;
            transition: all 0.5s linear;
            transform-origin: left;
            transform: rotate(45deg);
            width: 36px;
          }
        }
      }
    }
  }
  .center {
    background-color: var(--fixed-background-color);
    color: var(--fixed-color);
    height: var(--fixed-height);
  }
  .homeView-info {
    font-size: 64px;
    font-weight: bold;
    .svg-item {
      right: 20px;
      bottom: -75px;

      #svg_1 {
        stroke-dasharray: 220px;
        stroke-dashoffset: 220px;
        // animation: show 2s ease;
        transition: stroke-dashoffset 2s linear;
        &.showing {
          stroke-dashoffset: 0;
        }
      }
    }
  }
}
.sideMean-enter-active,
.sideMean-leave-active {
  transition: opacity 0.5s ease;
}

.sideMean-enter-from,
.sideMean-leave-to {
  opacity: 0;
}
/* 页头下方导航栏 */

.lists {
  margin: 120px 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  a {
    margin-bottom: 20px;
  }
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
