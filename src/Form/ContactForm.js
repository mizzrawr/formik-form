import React, { useState } from 'react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { Checkbox } from '@chakra-ui/checkbox';
import { Button } from '@chakra-ui/button';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input } from './Input';
import { userSchema } from '../Validations/UserValidation';

export const ContactForm = () => {
  const [formSent, changeFormSent] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          company: '',
          email: '',
          phone: '',
          relationship: '',
          message: '',
          password: '',
        }}
        //if you want to use yup validation =>
        validationSchema={userSchema}
        //if you want to use your own validation =>
        //Formik service, it helps you to validate your info
        // validate={values => {
        //   let errors = {};

        //   //email validation
        //   if (!values.email) {
        //     errors.email = 'Please type your email';
        //   } else if (
        //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
        //       values.email
        //     )
        //   ) {
        //     errors.email = 'Your E-mail is not valid';
        //   }

        //   //password validation
        //   if (!values.password) {
        //     errors.password = 'Please type your Password';
        //   } else if (
        //     !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/.test(
        //       values.password
        //     )
        //   ) {
        //     errors.password = 'Your Password is not secure';
        //   }
        //   //you need to return your variable so later you can pass it just like the other functions
        //   return errors;
        // }}
        onSubmit={(values, { resetForm }) => {
          //I want to send my form and right after clean fields
          resetForm();
          console.log('Sent!');
          changeFormSent(true);
          setTimeout(() => changeFormSent(false), 3000);
        }}
      >
        {({ errors, touched }) => (
          <>
            {/* when using Form (Formik), you can save the handleSubmit function  */}
            <Form
            //onSubmit={handleSubmit} there is no longer needed
            >
              <Flex
                minH="100vh"
                align="center"
                justify="center"
                bgGradient="linear(to-t, purple.200, pink.200)"
              >
                <Stack spacing="8" mx="auto" maxW="xl" py="12" px="6">
                  <Stack align="center">
                    <Heading fontSize="4xl">What can we do for you? </Heading>
                    <Text fontSize="lg" color="gray.600">
                      to enjoy all of our cool{' '}
                      <Link color="blue.400">features</Link> ✌️
                    </Text>
                  </Stack>
                  <Box rounded="lg" bg="purple.300" boxShadow="lg" p="8">
                    <Stack spacing="4">
                      <FormControl id="email">
                        <FormLabel>Email address</FormLabel>

                        <Input
                          border="1px"
                          borderColor="gray.200"
                          background="transparent"
                          color="white"
                          _hover={{}}
                          name="email"
                          placeholder="Example: miau@miau.com"
                          _placeholder={{ color: 'inherit', opacity: 0.5 }}

                          //   onChange={handleChange}
                          //   if the user touch the input and then click in other point, it is not going to throw an error.
                          //onBlur={handleBlur}
                        />

                        <ErrorMessage
                          name="email"
                          component={() => (
                            <ErrorMessage mt="0" color="red">
                              {errors.email}
                            </ErrorMessage>
                          )}
                        />
                      </FormControl>

                      <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input
                          border="1px"
                          borderColor="gray.200"
                          type="password"
                          color="white"
                          name="password"
                          background="transparent"
                          _hover={{}}

                          //   value={values.password}
                          //   onChange={handleChange}
                          //   onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="password"
                          component={() => (
                            <ErrorMessage mt="0" color="red">
                              {errors.password}
                            </ErrorMessage>
                          )}
                        />
                      </FormControl>
                      <Stack spacing="10">
                        <Stack
                          direction={{ base: 'column', sm: 'row' }}
                          align="start"
                          justify="space-between"
                        >
                          <Checkbox>Remember me</Checkbox>
                          <Link
                            color="black"
                            _hover={{
                              color: 'white',
                            }}
                          >
                            Forgot password?
                          </Link>
                        </Stack>
                        <Button
                          type="submit"
                          bg="blue.400"
                          color="white"
                          _hover={{
                            bg: 'blue.500',
                          }}
                        >
                          Sign in
                        </Button>
                        {formSent && <p>Welcome 🙌 </p>}
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
