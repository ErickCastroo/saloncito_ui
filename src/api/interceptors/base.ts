import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

export type SuccessResponse = {
  status: string
  message: string
  data: object | string | null
  meta: object | null
}

export type ErrorResponse = {
  status: string
  message: string
  details: object | string | null
}

// baseInterceptor.js
export const baseRequestInterceptor = async (config: InternalAxiosRequestConfig) => {
  config.headers['Content-Type'] = 'application/json'
  return config
}

export const baseResponseInterceptor = async (response: AxiosResponse) => {
  response.data = response.data as SuccessResponse
  return response
}

export const baseErrorHandler = async (error: AxiosError) => {
  if (!error.response) {
    return Promise.reject(error)
  }

  error.response.data = error.response.data as ErrorResponse
  return Promise.reject(error)
}