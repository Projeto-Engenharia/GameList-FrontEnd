import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    forwardRef,
    InputProps as ChakraInputProps,
    Input as ChakraInput,
    InputRightElement,
    Icon,
    InputGroup,
    FormErrorMessage,
    Text
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    info?: string;
    label?: string;
    icon?: IconType
    error?: FieldError
}

const InputBase = ({ info, error, label, icon, ...rest }: InputProps) => {

    return (
        <FormControl isInvalid={!!error} >
            {!!label && <FormLabel  _focus={{ color: "blue.500" }} aria-invalid={!!error} _invalid={{ color: "red.500" }}   fontWeight="bold" m="0" htmlFor={rest.name}>{label}</FormLabel>}
            <InputGroup size="lg" >
                <ChakraInput
                    bgColor="gray.700"
                    borderColor={!!error ? "red.700" : "gray.700"}
                    id={rest.name}
                    _hover={{
                        borderColor: "blue.500"
                    }}
                    aria-invalid={!!error}
                    _invalid={{ borderColor: "red.500" }}
                    {...rest}
                />
                <InputRightElement aria-invalid={!!error} _invalid={{ color: "red.500" }}  children={<Icon as={icon} />} />
            </InputGroup>

            {!!error && (
                <FormErrorMessage color="white">
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);