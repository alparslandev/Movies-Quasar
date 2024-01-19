import { boot } from 'quasar/wrappers'
import axios from 'axios'

const movieApi = axios.create({ baseURL: 'https://api.themoviedb.org' })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios

  app.config.globalProperties.$api = movieApi
})

export { axios, movieApi }
