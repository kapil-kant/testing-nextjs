import { apiRoot } from './config'

export type ApiResponse<T> = {
  success: boolean
  data: T
  message?: string
}

export async function baseFetch<T>(path: string, init?: RequestInit): Promise<ApiResponse<T>> {
  const response = await fetch(`${apiRoot}${path}`, init)
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json() as Promise<ApiResponse<T>>
}
