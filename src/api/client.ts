import { Api } from '@/constants/api'

import axios from 'axios'
import '@/api/interceptors/auth'

const axiosClient = axios.create({
  baseURL: Api.HOST,
  timeout: 10000
})

export { axiosClient }