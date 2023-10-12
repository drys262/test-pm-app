import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Search from './Search'

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
  },
})

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Search />
        </QueryClientProvider>
      </BrowserRouter>
    </ChakraProvider>
  )
}
