import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";

import { theme } from '../styles/theme';
import Routes from '../routes';
import { AuthProvider } from '../hooks/AuthHook';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
