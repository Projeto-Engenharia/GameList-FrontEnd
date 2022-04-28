import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    Image,
    Stack,
    Text,
    Link
} from "@chakra-ui/react";
import { FiUser, FiEye } from 'react-icons/fi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Input } from '../components/InputAuth';
import imgAuthHorizon from '../assets/HorizonImg.png';
import LogoIcon from '../assets/LogoIcon.svg';
import { AuthContext } from "../hooks/AuthHook";
import api from "../api/api";

type ISignIn = {
    nick: string;
    password: string;
}

interface IUser {
    id: string,
    nome: string,
    senha: string,
    games: [
      {
        id: string,
        nome: string,
        senha: string,
        descricao: string,
        avaliacao: 0,
        image: string
      }
    ]
  }

const schema = yup.object({
    nick: yup.string().required(),
    password: yup.string().required()
}).required()

export default function Auth() {

    const [users, setUsers] = useState<IUser[]>([]);

    const { signIn } = useContext(AuthContext)

    function logIn(data: any) {
        signIn(data);
    }

    const { control, handleSubmit, formState } = useForm<ISignIn>({
        resolver: yupResolver(schema)
    });
    const { errors } = formState;
    const handleSignIn: SubmitHandler<ISignIn> = async (data: ISignIn) => logIn(data);
    

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
                        <Text mt="2.5rem" fontWeight="bold" color="gray.500">WELCOME!</Text>
                        <Flex mt="3.5rem">
                            <Text m="0" fontSize={44} fontWeight="bold" color="white">Sign In</Text>
                            <Text m="0" fontSize={44} fontWeight="bold" color="blue.500">.</Text>
                        </Flex>
                        <Flex>
                            <Text color="white">Don't have account? </Text>
                            <Link href="/" fontWeight="bold" color="blue.500">&nbsp;Sign Up</Link>
                        </Flex>
                        <Flex as="form" onSubmit={handleSubmit(handleSignIn)} mt="2.5rem" direction="column">
                            <Stack>
                                <Controller
                                    name="nick"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Nick" icon={FiUser} error={errors.nick} {...field} />}
                                />
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input label="Password" type="password" icon={FiEye} error={errors.password} {...field} />}
                                />
                            </Stack>
                            <Button type="submit" size="lg" mt="20px" bgColor="blue.500" _hover={{ bgColor: "blue.700" }}>Sign In</Button>
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