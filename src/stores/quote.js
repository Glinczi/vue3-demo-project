import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getDailySentences } from "../api/requestPath"

export const useQuoteStore = defineStore('quote', () => {

  let quoteInfo = ref(null)
  let quote = quoteInfo.value

  async function getQuote() {
    let res = await getDailySentences()
    // console.log(res)
    if (res.status > 300) {
      alert(res.statusText)
    } else {
      quoteInfo.value = res.data.result
      quote = quoteInfo.value
      // console.log(quote)
    }
  }

  return { quote, quoteInfo, getQuote }
})
