import React from 'react';
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
        <FormControl>
            {!!label && <FormLabel fontWeight="bold" m="0" htmlFor={name}>{label}</FormLabel>}

            <ChakraInput 
                name={name}
                id={name}
            />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)