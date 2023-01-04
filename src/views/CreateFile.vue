<script setup>
import { computed, reactive, ref } from "@vue/runtime-core";
// 数据
let isShow = ref(false);

let file_list = reactive([
  {
    fileName: "文档",
    fileSize: "30MB",
  },
  {
    fileName: "音乐",
    fileSize: "30MB",
  },
  {
    fileName: "电影",
    fileSize: "30MB",
  },
]);

let fileName = ref("");
// 计算属性
const setDispaly = computed(() => {
  if (isShow.value) {
    return true;
  } else {
    return false;
  }
});
// 方法
const handleSuccess = function () {
  isShow.value = false;
  let fileSize = (Math.random() * 100).toFixed(2) + "MB";
  let obj = {
    fileName,
    fileSize,
  };
  file_list.push(obj);
  fileName.value = "";
};
const handleFaile = function () {
  isShow.value = false;
};
</script>

<template>
  <div class="create-file b-rd-4 b-2 p-10px">
    <div class="title-handle-area m-b-10px">
      <button
        class="bg-blue b-0 w-20 h-9 b-rd-2px cursor-pointer"
        @click="isShow = true"
      >
        新建
      </button>
    </div>
    <!-- 新建文件夹 -->
    <Transition>
      <div
        v-if="setDispaly"
        class="create-input h-32px flex items-center m-b-20px"
      >
        <div class="file-log w-32px h-32px m-r-10px">
          <img class="w-100%" src="../assets/file-icon.png" alt="" />
        </div>
        <div class="input-area">
          <input
            v-model="fileName"
            type="text"
            placeholder="请输入文件名"
            class="b-0 h-32px b-b-1px"
          />
        </div>
        <div class="create-handle-area flex items-center m-l-10px">
          <div
            class="success-hander w-32px h-32px cursor-pointer"
            @click="handleSuccess"
          >
            <img class="display-b w-100%" src="../assets/success.png" alt="" />
          </div>
          <div
            class="faile-handler w-32px h-32px cursor-pointer"
            @click="handleFaile"
          >
            <img class="display-b w-100%" src="../assets/error.png" alt="" />
          </div>
        </div>
      </div>
    </Transition>
    <!-- 文件夹列表 -->
    <div class="file-list">
      <div
        class="file-item flex items-center"
        v-for="item in file_list"
        :key="item"
      >
        <div class="file-log w-32px h-32px m-r-10px">
          <img class="w-100%" src="../assets/file-icon.png" alt="" />
        </div>
        <div class="file-name m-l-10px">{{ item.fileName }}</div>
        <div class="file-size m-l-50px">{{ item.fileSize }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.create-file {
  width: 900px;
  min-height: 300px;
  margin: 100px auto 30px;
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
