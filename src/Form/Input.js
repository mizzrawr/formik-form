import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
} from '@chakra-ui/react';

export const Input = ({ label, ...props }) => {
  // @ts-ignore
  const [field, meta] = useField(props);

  return (
    <FormControl mb="4" isInvalid={!!(meta.touched && meta.error)}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <ChakraInput
        {...field}
        size="md"
        {...props}
        id={field.name}
        variant="filled"
        errorBorderColor="red.300"
      />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
