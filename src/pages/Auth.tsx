import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Stack,
    Text,
    Icon
} from "@chakra-ui/react";
import { FiUser, FiEye, FiMail } from 'react-icons/fi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { Input } from '../components/InputAuth';
import imgAuthHorizon from '../assets/HorizonImg.png';
import LogoIcon from '../assets/LogoIcon.svg';

type ISignIn = {
    nick: string;
    email: string;
    password: string;
}

export default function Auth() {

    const { register, control ,handleSubmit, formState } = useForm<ISignIn>();
    const { errors } = formState;
    const handleCreateAccount: SubmitHandler<ISignIn> = async (data: ISignIn) => await console.log(data);

    return (
        <Flex w="100%" h="100vh" overflow="hidden" position="absolute">
            <Image src={imgAuthHorizon} w="100%" h="100%" position="fixed" zIndex={-1} alt="horizon wallpaper" />
            <Box width="100%"
                h="100%"
                position="fixed"
                bgGradient="linear(to-r, #282A37 0%, rgba(40, 42, 55, 0.57) 98.78%)"
                zIndex={0}
            />
            <Flex
                width="100%"
                h="100%"
                zIndex={1}
                px={100}
                py={10}
                direction="column"
            >
                <Flex w="100%" justifyContent="center">
                </Flex>
                <Image src={LogoIcon} w="100px" h="23px" />
                <Flex>
                    <Flex minWidth="35%" direction="column">
                        <Text mt="2.5rem" fontWeight="bold" color="gray.500">Start for free</Text>
                        <Flex mt="3.5rem">
                            <Text m="0" fontSize={44} fontWeight="bold" color="white">Create new account</Text>
                            <Text m="0" fontSize={44} fontWeight="bold" color="blue.500">.</Text>
                        </Flex>
                        <Flex>
                            <Text color="white">Already a member? </Text>
                            <Text color="blue.500">&nbsp;Log In</Text>
                        </Flex>
                        <Flex as="form" onSubmit={handleSubmit(handleCreateAccount)} mt="2.5rem" direction="column">
                            <Stack>
                                <Controller
                                    name="nick"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Nick" icon={FiUser} {...field} /> }
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Email" icon={FiMail} {...field} /> }
                                />
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Password" type="password" icon={FiEye} {...field} /> }
                                />
                            </Stack>
                            <Button type="submit" size="lg" mt="20px" bgColor="blue.500" _hover={{ bgColor: "blue.700" }}>Create Account</Button>
                        </Flex>
                    </Flex>
                    <Flex ml="20%" mt="6.5rem" direction="column">
                        <Text fontWeight="bold" fontSize="4xl">Half-Life 2</Text>
                        <Text fontSize="2xl" fontWeight="medium">“The right man in the wrong place can make all the difference in the world."</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}