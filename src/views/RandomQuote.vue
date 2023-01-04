<script setup>
import { computed, ref, toRefs } from "@vue/reactivity";
import { onMounted } from "vue";
import { useQuoteStore } from "../stores/quote.js";
const quote = useQuoteStore();
const color = ref("");
onMounted(() => {
  quote.getQuote();
  color.value = getRandomColor();
});
// method

function nextQuote() {
  quote.quoteInfo = null
  // quote.quote = quote.quoteInfo.value
  quote.getQuote();
  color.value = getRandomColor();
}

// 随机生成16进制颜色
function getRandomColor() {
  return `#${Math.floor(Math.random() * 0xffffff) .toString(16)}`;
}
</script>
<template>
  <Transition>
    <div
    class="random-quote w-100vw h-100vh position-relative"
    :style="{ backgroundColor: color }"
    v-if="quote.quoteInfo"
  >
    <div class="quote-area w-25% position-absolute top-50% left-50%">
      <div class="quote-info" :style="{ color: color }">
        <div class="detail text-center m-b-20px">
        <i class="fa-solid fa-quote-left" style="margin-right: 5px; font-size: 25px;"></i>
          {{ quote.quoteInfo.name }}
        </div>
        <div class="from text-right">———&nbsp;{{ quote.quoteInfo.from }}</div>
      </div>
      <div
        class="next-btn"
        :style="{ backgroundColor: color }"
        @click="nextQuote()"
      >
        Next
      </div>
    </div>
  </div>
  </Transition>
  
</template>
<style lang="scss" scoped>
.random-quote {
  .quote-area {
    background-color: #fff;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 80px 100px;
    .quote-info {
      .detail {
        font-size: 20px;
      }
    }
    .next-btn {
      cursor: pointer;
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 10%;
      box-sizing: border-box;
      line-height: 25px;
      text-align: center;
      border-radius: 5px;
      padding: 5px;
      color: #fff;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 2s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
