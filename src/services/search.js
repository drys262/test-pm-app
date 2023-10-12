import { useApiDataClient } from '../utils/http'
import { useQuery } from '@tanstack/react-query'

export const fruitRequests = {
  getFruits: {
    queryKey: 'get-fruits',
    url: 'https://fruityvice.com/api/fruit/all',
  },
}

export const useGetFruits = () => {
  const apiClient = useApiDataClient()
  const request = fruitRequests.getFruits

  return useQuery({
    queryKey: [request.queryKey],
    queryFn: () => apiClient.get(request.url),
  })
}
