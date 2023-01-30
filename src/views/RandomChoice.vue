<template>
  <div class="h-100vh w-100vw bg-purple-400 p-t-100px box-border">
    <div class="title w-50% text-center m-auto text-light-50">
      Enter all of the choices divided by a comma (','). Press enter when you're
      done
    </div>
    <div class="input-area flex justify-center items-center m-b-30px">
      <textarea
        name="chose-input"
        id=""
        cols="30"
        rows="10"
        v-model="choseString"
        @keydown.enter="handleInput"
        style="font-size: 20px"
        class="w-50% rd outline-0 p-20px box-border"
      ></textarea>
    </div>
    <div class="chose-list-show flex w-50% m-auto">
      <div
        style="border-radius: 10px; line-height: 20px"
        class="chose-item m-r-10px p-10px w-30px h-20px text-center bg-purple-300"
        :class="{ select: randomNum == index }"
        v-for="(item, index) in choseList"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick } from "vue";

const choseString = ref("");
const choseList = ref(undefined);
const randomNum = ref(undefined);
let interval = reactive({});
//
function handleInput() {
  // 先清空列表
  choseList.value = [];
  // 将输入的内容展开成数组
  let arr = choseString.value.split(",");
  choseList.value = arr;
  // 清空输入框的内容
  setTimeout(() => {
    choseString.value = "";
  }, 10);
  nextTick(() => {
    randomChose();
  });
}

// 随机选择效果
function randomChose() {
  const el = document.querySelector(".chose-list-show");
  console.dir(el.children);
  const randomNumTotal = el.children.length;
  interval = setInterval(() => {
    randomNum.value = Math.floor(Math.random() * randomNumTotal);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
}
</script>

<style lang="scss" scoped>
.chose-item.select {
  background-color: purple;
}
</style>
