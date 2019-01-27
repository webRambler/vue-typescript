import axios from 'axios'


const TIMEOUT: number = 15000
const http = axios.create({
  timeout: TIMEOUT,
  headers: {
    // cookie: '_iuqxldmzr_=32; _ntes_nnid=1f46796da355e9c6a7f6b1ca2c427e7a,1536238356678; _ntes_nuid=1f46796da355e9c6a7f6b1ca2c427e7a; WM_TID=MgscUs6HwNNC8KJ9sExGjps%2BG%2BQFuar%2F; mail_psc_fingerprint=866c73b69725e74d9ce68876528ecedf; P_INFO=talent1203@163.com|1537362754|0|other|00&99|gud&1537357708&other#gud&440300#10#0#0|&0||talent1203@163.com; __utma=94650624.245959052.1536238358.1547297961.1547401122.4; __utmz=94650624.1547401122.4.4.utmcsr=cnblogs.com|utmccn=(referral)|utmcmd=referral|utmcct=/; OUTFOX_SEARCH_USER_ID_NCOO=2011520941.103734; WM_NI=6Noh1u3jDPn2f7MT9MlfS8YxBGlx5uiJSB4aZ%2BNFlcFexE0%2B30qM2wEiitmivzPQSeP3NbpOoHGF%2BZDiYE85oJ3rAezUxQMYeGLnh4FZ8URGhgbDF28GvoWt69xEIXdmSnE%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eebbc76796adfe92d059ab8e8fb6d54a929e8aaab87d8f88ba9ac17fbc92ab9bc52af0fea7c3b92af692a189b47ff1b68cb1ed3aa6e983b5bc47b0ba9dd9dc748299a499b87fab969da3b76b9af582a7ef6986bbb8a6b321f1f0bfaeb17d87b7a795f063b6a6a0b2d26f94ed8283f345ad9889a7aa5288b797a6bb3fad96fd93c46fba8bb8b2d053a799848feb408686f8b6d14dacb9aea5c53afc99ba90d680f6e7b8a6cc54a8b39d8fc837e2a3; JSESSIONID-WYYY=skXlc7cQWsEZ%5CG5xuRr23cXpYnxAM9GYZrDsylhWbzs9GqcKXTgBqCGBmS8pqQapcnTXTPmQR9s5Wl8eB5AT%2BId5RnEmmpRkcuHXX4ZWD7P%2FZA%2F6WYuMYSNKdhPKP2rlkZl6y2PqVs5vPD%5CbQUyKM3dvKSANi0dgHf%2FbCJrcUNOc2PD1%3A1548606860300; ___rl__test__cookies=1548605170696; abt=97'
  }
})

interface httpPendingObj {
  u: string,
  f: Function
}

let httpPending: httpPendingObj[] = []
const Cancel = axios.CancelToken

function removeHttpPending(config: any) {
  httpPending.map((item, index, arr) => {
    if (item.u === config.url + '&' + config.method) {
      console.warn(`${config.url}: 短时间内重复请求`)
      item.f()
      arr.splice(index, 1)
    }
    return config
  })
}

http.interceptors.request.use(config => {
  removeHttpPending(config)
  config.cancelToken = new Cancel(c => {
    httpPending.push({ u: config.url + '&' + config.method, f: c })
  })
  return config
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  removeHttpPending(res.config)
  console.log(res.data, 789)
  return res
}, err => {
  console.error(err)
  return Promise.reject(err)
})

export default http
