<script setup>
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

let styleSheetText = ref("");

// computed
// 用于将文本转换成css对象
const styleSheetObj = computed(() => {
  if (styleSheetText.value == "") return;
  // 先将字符串转换成数组通过 \n
  let cssArr = styleSheetText.value.split("\n").map((item) => {
    return item.slice(0, -1);
  });
  // console.log(cssArr);
  // 再遍历数组 将每一项变成键值对的形式
  let cssObjLike = cssArr.map((item, index) => {
    return item.split(":");
  });
  // 将二维数组转换成对象
  let cssObj = Object.fromEntries(cssObjLike);
  return cssObj;
});
</script>

<template>
  <div class="visual-css h-100vh bg-black">
    <div
      class="show-area m-auto w-90% b-2px bg-white h-50vh box-border rd-50px p-20px"
    >
      <div class="show-item" :style="styleSheetObj"></div>
      <div v-if="styleSheetText == ''" class="tips-area text-20px">
        这里是展示区
      </div>
    </div>
    <div
      class="input-area m-auto w-90% b-2px bg-purple h-50vh box-border rd-50px overflow-hidden flex justify-center items-center"
    >
      <textarea
        placeholder="请输入合法的CSS代码"
        v-model="styleSheetText"
        class="text-area w-90% h-90% bg-purple b-0"
        cols="30"
        rows="10"
      ></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.visual-css {
  .show-area {
    position: relative;
    .tips-area {
      position: absolute;
      width: 300px;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .input-area {
    .text-area {
      font-size: 20px;
      resize: none; // 去除右下角的条纹
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
