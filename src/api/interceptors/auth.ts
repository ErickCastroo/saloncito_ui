// authInterceptor.js
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import {
  baseRequestInterceptor,
  baseResponseInterceptor,
  baseErrorHandler,
} from '@/api/interceptors/base'

const authRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    config = await baseRequestInterceptor(config)
    config.withCredentials = true
    return config
  } catch (error) {
    return baseErrorHandler(error as AxiosError)
  }
}

const authResponseInterceptor = async (response: AxiosResponse) => {
  try {
    response = await baseResponseInterceptor(response)
    return response
  } catch (error) {
    return baseErrorHandler(error as AxiosError)
  }
}

axios.interceptors.request.use(authRequestInterceptor, baseErrorHandler)
axios.interceptors.response.use(authResponseInterceptor, baseErrorHandler)