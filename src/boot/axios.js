import { boot } from 'quasar/wrappers'
import axios from 'axios'

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org/3' })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = movieApi
  axios.interceptors.request.use((config) => {
    config.headers['Authorization'] =
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzN2VmZDZiNzRjNjg4ZTY1MWQzNTJhMzYwYWFhN2ZkMyIsInN1YiI6IjYzZTM3YTRkNWNhNzA0MDA5M2RiZGVhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TUzCYw2qruSB9UlpbwHUF2T6w-D7Dus3aD5Bjo63VSw'
    config.headers['Content-Type'] = 'application/json'
  })
})

export { axios, movieApi }
