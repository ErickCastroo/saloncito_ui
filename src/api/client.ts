import { Api } from '@/constants/api'

import axios from 'axios'

import { authRequestInterceptor, authResponseInterceptor } from '@/api/interceptors/auth'
import { baseRequestInterceptor, baseResponseInterceptor } from '@/api/interceptors/base'

const axiosClient = axios.create({
  baseURL: Api.HOST,
  timeout: 10000
})

axiosClient.interceptors.request.use(authRequestInterceptor, baseRequestInterceptor)
axiosClient.interceptors.response.use(authResponseInterceptor, baseResponseInterceptor)

export { axiosClient }