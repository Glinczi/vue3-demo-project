<template>
  <div>
    <div id="lottie-box" class="animation w-100px h-100px" />
  </div>
</template>

<script setup>
import lottie from "lottie-web";
import * as anData from "@/assets/1103-confetti-outline-edited.json";
import { onMounted, reactive, ref } from "vue";
const animation = ref();
onMounted(() => {
  animation.value = lottie.loadAnimation({
    container: document.getElementById("lottie-box"),
    renderer: "svg", // 渲染方式 默认为svg,还可以渲染为htm1和canvasrenderer
    loop: false, // 循环播放
    autoplay: true, // 自动播放
    // animationData和path二选一
    animationData: anData.default, // 本地动画
    // path: anData, // 网络json地址
  });
  // animation.value.addEventListener("loopComplete", animation.value.pause());
});
</script>

<style lang="scss" scoped></style>
