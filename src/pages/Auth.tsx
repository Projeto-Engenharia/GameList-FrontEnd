import React from "react";
import {
    Box,
    Flex,
    Image
} from "@chakra-ui/react";

import imgAuthHorizon from '../assets/HorizonImg.png';

export default function Auth() {
    return (
        <Flex w="100%" h="100vh" overflow="hidden" position="absolute">
            <Image src={imgAuthHorizon} w="100%" h="100%"/>
            <Box width="100%" h="100%" position="fixed" bgGradient="linear(to-r, #282A37 30%, rgba(40, 42, 55, 0.77) 98.78%)"/>
        </Flex>
    )
}