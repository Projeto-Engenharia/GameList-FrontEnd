import React, { useState } from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Stack,
    Text,
    Link,
    useToast
} from "@chakra-ui/react";
import { FiUser, FiEye, FiMail } from 'react-icons/fi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from '../components/InputAuth';
import imgGodOFWar from '../assets/GodOFWar.jpg';
import LogoIcon from '../assets/LogoIcon.svg';
import api from "../api/api";

type ISignIn = {
    nick: string;
    password: string;
}

const schema = yup.object({
    nick: yup.string().required(),
    password: yup.string().required()
}).required()

export default function Auth() {
    const toast = useToast();

    async function createUser(data: any) {


            try {

                const user = {
                    nome: data.nick,
                    senha: data.password,
                    bio: "Insira sua Bio aqui",
                    games: [],
                }


                const response = await api.post('/api/Users', user);

                return toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
            } catch (error) {
                return toast({
                    title: 'Error.',
                    description: "Already Created",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
            }
           
    }

    const { control, handleSubmit, formState } = useForm<ISignIn>({
        resolver: yupResolver(schema)
    });
    const { errors } = formState;
    const handleCreateAccount: SubmitHandler<ISignIn> = async (data: ISignIn) => createUser(data);

    return (
        <Flex w="100%" h="100vh" overflow="hidden" position="absolute">
            <Image src={imgGodOFWar} w="100%" h="100%" position="fixed" zIndex={-1} alt="horizon wallpaper" />
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
                            <Link href="/signUp" fontWeight="bold" color="blue.500">&nbsp;Log In</Link>
                        </Flex>
                        <Flex as="form" onSubmit={handleSubmit(handleCreateAccount)} mt="2.5rem" direction="column">
                            <Stack>
                                <Controller
                                    name="nick"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Nick" icon={FiUser} error={errors.nick} {...field} />}
                                />
                                {/* <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Email" icon={FiMail} error={errors.email} {...field} />}
                                /> */}
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Password" type="password" icon={FiEye} error={errors.password} {...field} />}
                                />
                            </Stack>
                            <Button type="submit" size="lg" mt="20px" bgColor="blue.500" _hover={{ bgColor: "blue.700" }}>Create Account</Button>
                        </Flex>
                    </Flex>
                    <Flex ml="20%" mt="6.5rem" direction="column">
                        <Text fontWeight="bold" fontSize="4xl">Gragas</Text>
                        <Text fontSize="2xl" fontWeight="medium">"A bebida s?? ?? um problema quando a caneca est?? vazia"</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}