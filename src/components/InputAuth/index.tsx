import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    forwardRef,
    InputProps as ChakraInputProps,
    Input as ChakraInput
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name?: string;
    label?: string;
}

const InputBase = ({ name, label, ...rest }: InputProps) => {


    return (
        <FormControl mt="0.5rem">
            {!!label && <FormLabel _focus={{ color: "blue.500"}}  fontWeight="bold" m="0" htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                bgColor="gray.700"
                borderColor="gray.700"
                name={name} 
                id={name}
                size="lg"
                _hover={{
                    borderColor: "blue.500"
                }}
                {...rest}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)