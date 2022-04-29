import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";

import { theme } from '../styles/theme';
import Routes from '../routes';
import { AuthProvider } from '../hooks/AuthHook';
import {
  QueryClient,
  QueryClientProvider, 
} from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </QueryClientProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
