<script setup>
import { computed } from "@vue/reactivity";
import { ref, reactive, onMounted } from "vue";

// data
let initMinutes = ref(25);
let initSecond = ref(0);
let initData = ref(-210);
let interval = reactive({});
let minutesArr = reactive([]);
let isStart = ref(false);
// computed

onMounted(() => {
  minutesArr.push(...setMinutesArr());
});
// methods
function setMinutesArr() {
  let start = initMinutes.value - 10;
  let end = initMinutes.value + 36;
  let length = end - start;
  let arr = new Array(length).fill(start);
  let newArr = arr.map((item, index) => {
    return item + index;
  });
  return newArr;
}
function startTimeCount() {
  isStart.value = true;
  interval = setInterval(() => {
    // 倒计时结束后
    if (initMinutes.value == 0 && initSecond.value == 0) {
      // 清除定时器
      clearInterval(interval);
    } else {
      if (initSecond.value == 0) {
        initMinutes.value--;
        initSecond.value = 59;
      }
      initSecond.value--;
      // initSecond.value = initSecond.value - 30;
    }
  }, 1000);
}
function stopTimeCount() {
  // 清除定时器
  clearInterval(interval);
}
function cancelTimeCount() {
  isStart.value = false;
  // 清除定时器
  clearInterval(interval);
  initMinutes.value = 25;
  initSecond.value = 0;
  initData.value = -210;
}
function desMinuter() {
  if (initData.value == 190 || isStart.value == true) return;
  initData.value = initData.value + 40;
  initMinutes.value--;
}
function asMinuter() {
  if (initData.value == -1610 || isStart.value == true) return;
  initData.value = initData.value - 40;
  initMinutes.value++;
}
</script>

<template>
  <div
    class="tomato-clock w-400px h-300px b-2px m-auto p-t-50px p-b-50px box-border rd-10px"
  >
    <!-- 倒计时area -->
    <div class="count-area m-auto w-50% text-center flex justify-center">
      <div class="hour">00</div>
      :
      <div class="minute">
        {{ initMinutes < 10 ? "0" + initMinutes : initMinutes }}
      </div>
      :
      <div class="secends">
        {{ initSecond < 10 ? "0" + initSecond : initSecond }}
      </div>
    </div>
    <!-- 时间展示area -->
    <div
      class="clock-num h-50px flex items-center m-auto"
      :style="{ transform: `translateX(${initData}px)` }"
    >
      <!-- overflow-hidden -->
      <div
        v-if="minutesArr.length > 0"
        class="num-item m-l-10px m-r-10px"
        v-for="(item, index) in minutesArr"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
    <div class="arrow-area flex justify-center items-center">
      <div class="arrow"></div>
    </div>
    <!-- 操作区域 -->
    <div class="handle-area m-t-10px">
      <div class="left-select handle-btn" @click="desMinuter">L</div>
      <div class="start handle-btn" @click="startTimeCount">start</div>
      <div class="start handle-btn" @click="stopTimeCount">pause</div>
      <div class="start handle-btn" @click="cancelTimeCount">cancel</div>
      <div class="right-select handle-btn" @click="asMinuter">R</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tomato-clock {
  user-select: none;
  overflow: hidden;
  .clock-num {
    transition: transform 0.5s linear;
    .num-item {
      border: 1px dashed black;
      border-radius: 4px;
      width: 18px;
      height: 18px;
      line-height: 18px;
    }
    .num-item:first-child {
      margin-left: 0;
    }
  }
  .arrow-area {
    height: 16px;
    .arrow {
      width: 0;
      border: 10px solid transparent;
      border-bottom-color: red;
    }
  }
  .handle-area {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .handle-btn {
      cursor: pointer;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 15px;
      border: 1px solid black;
    }
  }
}
</style>
