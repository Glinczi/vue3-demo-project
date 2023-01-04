<script setup></script>
<template>
  <!-- 雪花效果 -->
  <div class="container">
    <div class="ani-snow bg-black h-100vh w-100vw">
      <div class="snow-item absolute" v-for="index in 10" :key="index"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes snowfall {
  0% {
    transform: translateY(-500px);
  }
  100% {
    transform: translateY(500px);
  }
}
$top: 20vh;
.ani-snow {
  position: relative;
  overflow: hidden;
  .snow-item:nth-child(1) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(2) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(3) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(4) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(5) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(6) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(7) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(8) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(9) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
  .snow-item:nth-child(10) {
    $top: (
        random(
          $limit: 500,
        )
      ) + px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: $top;
    background-color: #fff;
    left: (random($limit: 100)) + vw;
    animation: snowfall 13s linear infinite;
  }
}
</style>
