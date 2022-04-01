import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    forwardRef,
    InputProps as ChakraInputProps,
    Input as ChakraInput,
    InputRightElement,
    Icon,
    InputGroup
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface InputProps extends ChakraInputProps {
    info?: string;
    label?: string;
    icon?: IconType
}

const InputBase = ({ info, label, icon, ...rest }: InputProps) => {


    return (
        <FormControl>
            {!!label && <FormLabel _focus={{ color: "blue.500" }}  fontWeight="bold" m="0" htmlFor={rest.name}>{label}</FormLabel>}
            <InputGroup size="lg" >
                <ChakraInput
                    bgColor="gray.700"
                    borderColor="gray.700"
                    // name={rest.name}
                    id={rest.name}
                    _hover={{
                        borderColor: "blue.500"
                    }}
                    {...rest}
                />
                <InputRightElement children={<Icon as={icon} />} />
            </InputGroup>
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);