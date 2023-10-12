import axios from 'axios'

export const createApiClient = () => axios.create()

export const useApiDataClient = () => {
  const axiosClient = createApiClient()
  return axiosClient
}
