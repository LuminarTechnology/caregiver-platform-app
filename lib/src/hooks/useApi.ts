import client from '@lib/config/axios'
import { useQuery, useMutation, QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 30 * 1000
    },
    mutations: {
      retry: 0
    }
  }
})

export type QueryKey = readonly unknown[]

export type ApiQuery = {
  key: QueryKey
  url: string
  enabled?: boolean
}

export type ApiMutation = {
  url: string
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  invalidate?: QueryKey[]
}

export const queryKey = {
  all: (resource: string) => [resource] as QueryKey,
  list: (resource: string, filters?: Record<string, any>) =>
    [resource, 'list', filters] as QueryKey,
  detail: (resource: string, id: string | number) =>
    [resource, 'detail', id] as QueryKey
}

export function useApiQuery<T>({ key, url, enabled = true }: ApiQuery) {
  return useQuery<T>({
    queryKey: key,
    queryFn: async () => {
      const response = await client.get<T>(url)
      return response.data
    },
    enabled
  })
}

export function useApiMutation<T, U>({
  url,
  method = 'POST',
  invalidate,
  onSuccess
}: ApiMutation & {
  onSuccess?: (data: U) => void | Promise<void>
}) {
  return useMutation<U, Error, T>({
    mutationFn: async (data: T) => {
      const response = await client<U>({
        method,
        url,
        data
      })
      console.log(response);
      return response.data
    },
    onSuccess: async (data) => {
      await onSuccess?.(data)
      
      invalidate?.forEach((key) =>
        queryClient.invalidateQueries({ queryKey: key })
      )
    }
  })
}
