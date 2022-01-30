// import Vue from 'vue'
// import axios from 'axios'
// const API = {
//
// }
// import $axios from '@nuxtjs/axios'
export default function ({ $axios }, inject) {
  $axios.setBaseURL('http://127.0.0.1:9000/')
  const API = {
    projects: {},
    email: {
      sendEmail: data => $axios.$post('/send_email', data)
    },
    test: () => $axios.get('/test1')
  }
  inject('API', API)
  // API: {
  //   test: () => $axios.get('/test1')
  // }
}
// Vue.use({
//   install (Vue) {
//     Object.defineProperty(Vue.prototype, '$API', { value: API })
//   }
// })
// }

// export default function ({ $axios, redirect }) {
//   $axios.onRequest(config => {
//     console.log('Making request to ' + config.url)
//   })
//
//   $axios.onError(error => {
//     const code = parseInt(error.response && error.response.status)
//     if (code === 400) {
//       redirect('/400')
//     }
//   })
// }

// export default function ({
//   $axios,
//   redirect
// }) {
//   console.log($axios, redirect)
//   // $axios.onError(error => {
//   //   if (error.response.status === 500) {
//   //     redirect('/sorry')
//   //   }
//   // })
// }
