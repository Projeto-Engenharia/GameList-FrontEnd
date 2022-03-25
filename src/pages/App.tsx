import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import Auth from './Auth';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Auth />
    </ChakraProvider>
  );
}

export default App;
