import Request from "./request"

// 获取每日一句
export const getDailySentences = function () {
  return Request({
    method: 'get',
    url: "/sentences"
  })
}