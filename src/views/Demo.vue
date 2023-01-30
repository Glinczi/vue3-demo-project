<template>
  <div>
    <div
      class="input-box w-200px h-30px m-auto overflow-hidden relative"
      @click="autoFocus"
    >
      <span class="absolute" ref="usernameNode"
        >{{ username
        }}<span v-show="showCursor" style="line-height: 24px">|</span></span
      >
    </div>
    <!-- <div
      class="input-box password-input w-200px h-30px m-auto relative"
      @click="autoFocus"
    >
      <span class="pwdHide absolute"
        >{{ hidePwd
        }}<span v-show="pwdShowCursor" style="line-height: 20px">|</span></span
      >
    </div> -->
  </div>
</template>

<script setup>
import { ref, watch, reactive, nextTick } from "vue";
const username = ref(undefined);
const password = ref(undefined);
const hidePwd = ref(undefined);
const showCursor = ref(false);
const pwdShowCursor = ref(false);
let interval = reactive({});
const usernameNode = ref(null);
function autoFocus(value) {
  // 闪烁光标
  flashCursor();
  username.value = "hbsddedsadafdafda1333332345";
  // let length = password.value.length;
  // console.log(password.value);
  // console.log(length);
  // hidePwd.value = new Array(length).fill("●").join("");
}

/**
 * 光标闪烁
 */
function flashCursor() {
  interval = setInterval(() => {
    showCursor.value = !showCursor.value;
  }, 500);
}
watch(username, (to, from) => {
  if (to != from) {
    console.dir(usernameNode.value);
    // 获取内容的长度
    nextTick(() => {
      let userNameWidth = usernameNode.value.offsetWidth;
      let parentNodeWidth = usernameNode.value.parentNode.clientWidth;
      console.log(
        userNameWidth > parentNodeWidth,
        userNameWidth,
        parentNodeWidth
      );
      if (userNameWidth > parentNodeWidth) {
        let moveWidth = userNameWidth - parentNodeWidth + 10;
        console.log("111", moveWidth);
        usernameNode.value.style.left = `-${moveWidth}px`;
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.input-box {
  border: 1px solid tan;
  line-height: 28px;
}
</style>
