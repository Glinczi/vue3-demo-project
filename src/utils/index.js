// 防抖
export function throttle(fn, delay) {
  let lock = false // 首先不上锁，正常执行函数(类似全局变量)
  return function () {
    if (lock) {
      // console.log('拒绝执行')
      // 拒绝执行
      return
    } else {
      // 执行
      // console.log('开始执行')
      fn()
      lock = true // 上锁  不能执行
      setTimeout(() => {
        lock = false // 定时开锁
      }, delay);
    }
  }
}