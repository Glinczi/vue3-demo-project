var twoSum = function (nums, target) {
  let index = []
  let leftValue = 0
  let inTarget = target
  for (let i = 0; i < nums.length; i++) {
    let iValue = nums[i]
    index.push(i)
    leftValue = inTarget - iValue
    console.log('index', index)
    console.log('leftValue', leftValue)
    for (let k = i + 1; k < nums.length; k++) {
      // 检查是否循环的最后一位
      if (k == nums.length - 1) {
        let kValue = nums[k]
        if (kValue == leftValue) {
          index.push(k)
          return index
        } else {
          index.shift()
        }
      } else {
        let kValue = nums[k]
        // 检查其余的参数和leftValue的关系
        if (kValue == leftValue) {
          index.push(k)
          return index
        } else {
          continue
        }
      }
    }
  }
};
let nums = [-10, -1, -18, -19], target = -19
console.log(twoSum(nums, target))