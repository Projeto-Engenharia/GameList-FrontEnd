import React from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Stack,
    Text
} from "@chakra-ui/react";

import { Input } from '../components/InputAuth';
import imgAuthHorizon from '../assets/HorizonImg.png';

export default function Auth() {
    return (
        <Flex w="100%" h="100vh" overflow="hidden" position="absolute">
            <Image src={imgAuthHorizon} w="100%" h="100%" position="fixed" zIndex={-1} />
            <Box width="100%"
                h="100%"
                position="fixed"
                bgGradient="linear(to-r, #282A37 30%, rgba(40, 42, 55, 0.57) 98.78%)"
                zIndex={0}
            />
            <Flex
                width="100%"
                h="100%"
                zIndex={1}
                px={100}
                py={100}
            >
                <Flex minWidth="40%" direction="column">
                    <Text fontWeight="bold" color="gray.500">Start for free</Text>
                    <Flex>
                        <Text m="0" fontSize={44} fontWeight="bold" color="white">Create new account</Text>
                        <Text m="0" fontSize={44} fontWeight="bold" color="blue.500">.</Text>
                    </Flex>
                    <Flex>
                        <Text color="white">Already a member? </Text>
                        <Text color="blue.500">&nbsp;Log In</Text>
                    </Flex>
                    <Flex mt="4.5rem" direction="column">
                        <Input name="nick" label="Nick" />
                        <Input name="password" label="Password" type="password" />
                        <Button mt="20px" bgColor="blue.500" type="submit" _hover={{ bgColor: "blue.700" }} >Sign In</Button>
                    </Flex>
                </Flex>
                <Flex ml="20%" mt="1    .5rem" direction="column">
                    <Text fontWeight="bold" fontSize="4xl">Half-Life 2</Text>
                    <Text fontSize="2xl" fontWeight="light">“The right man in the wrong place can make all the difference in the world."</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}