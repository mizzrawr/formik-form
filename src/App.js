import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ContactForm } from './Form/ContactForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ContactForm />
    </ChakraProvider>
  );
}

export default App;
