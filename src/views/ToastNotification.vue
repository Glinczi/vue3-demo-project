<template>
  <div class="toast-notification w-100vw h-100vh">
    <div class="show-btn min-w-200px h-50px" @click="addToast">
      click to show toast
    </div>
    <div class="toast-list">
      <TransitionGroup name="list">
        <div class="toast-list-item" v-for="item in toastList" :key="item.id">
          {{ item.msg }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from "vue";

name: "toast-notifiction";
let toastList = reactive([]); // 弹窗列表
let intervalTime = reactive({});
let lock = ref(false);
let toastNum = ref(0);

// 监听弹窗列表的数据变化
watch(
  () => {
    // 这个回调是一个getter函数
    return toastList.length;
  },
  (to, from) => {
    if (to > 0 && !lock.value) {
      // 有数据 每隔几秒删除第一个消息对象
      intervalTime = setInterval(() => {
        if (toastList.length > 0) {
          toastList.shift();
        } else {
          clearInterval(intervalTime);
          lock.value = false;
        }
      }, 1500);
      lock.value = true;
    } else if (to == 0) {
      // 关闭定时器
      clearInterval(intervalTime);
      lock.value = false;
    }
  }
);
watch(lock, (to, from) => {});

class CreateToast {
  constructor(msg, id) {
    this.msg = msg;
    this.id = id;
  }
}

function addToast() {
  // 通过点击创建一个弹窗对象，然后推入弹窗列表
  let toastObj = new CreateToast(
    `这是弹窗的内容${toastNum.value}`,
    toastNum.value
  );
  toastNum.value++;
  toastList.push(toastObj);
}
</script>

<style lang="scss" scoped>
.toast-notification {
  background-color: cadetblue;
  position: relative;
  .show-btn {
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #ccc;
    border-radius: 25px;
  }
  .toast-list {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-right: 30px;
    .toast-list-item {
      background-color: burlywood;
      min-width: 100px;
      padding: 10px;
      margin: 10px 0 0;
      border-radius: 10px;
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
