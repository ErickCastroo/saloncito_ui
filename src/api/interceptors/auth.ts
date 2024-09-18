import { LocalStorageKey } from '@/constants/localstorage'

import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import {
  baseRequestInterceptor,
  baseResponseInterceptor,
  baseErrorHandler,
} from '@/api/interceptors/base'

export const authRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  try {
    config = await baseRequestInterceptor(config)
    config.withCredentials = true
    console.log('interceptor auth')
    return config
  } catch (error) {
    return baseErrorHandler(error as AxiosError)
  }
}

export const authResponseInterceptor = async (response: AxiosResponse) => {
  try {
    response = await baseResponseInterceptor(response)
    console.log('interceptor auth')
    if (response.status === 401) {
      localStorage.removeItem(LocalStorageKey.USER)
    }
    return response
  } catch (error) {
    return baseErrorHandler(error as AxiosError)
  }
}