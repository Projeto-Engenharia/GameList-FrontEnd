import React, { useContext } from 'react';
import {
    Badge,
    Button,
    Flex,
    Icon,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { url } from 'inspector';

import { FiStar } from 'react-icons/fi'
import api from '../../api/api';
import { stringify } from 'querystring';
import { errorMonitor } from 'stream';
import { AuthContext } from '../../hooks/AuthHook';

interface IGameParams extends IGames {
    haveTheGame: boolean;
}


const CardGame = ( { id, nome, senha, descricao, avaliacao, image, haveTheGame}: IGameParams) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)
    const toast = useToast();

    async function getGameForMe( idGame: string) {
        try {
           

            // return console.log(user.id, idGame)

            await api.put(`/api/Users/${user.id}/addGame/${idGame}`)

            toast({
                title: 'Sucesso ao adicionar o jogo',
                description: "Jogo foi adicionado com sucesso",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
        } catch (error) {

            toast({
                title: 'Error',
                description: "Erro ao tentar favoritar o game",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        return;
    }

    return (
        <>
        <Flex onClick={onOpen} w="10rem" minW="10rem" direction="column" alignItems="center">
            <Flex 
                direction="column" 
                bgColor="gray.800"  
                minW="100%" 
                w="100%" 
                h="15rem" 
                m="2px"
                borderRadius="2rem"
                boxShadow="0px 0px 30px rgba(0, 0, 0, 0.7)"
            >
                <Flex h="100%" w="100%" borderRadius="2rem" bgSize="120%" bgImage={image} bgRepeat="no-repeat" backgroundSize="120%" bgPos="center" />
                
            </Flex>
            <Text fontWeight="medium" align="center" fontSize="14px">{nome}</Text>
        </Flex>
        <Modal size="4xl" isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent bgColor="gray.800" >
                <ModalHeader>
                    <Flex align="center">
                        {nome} 
                    </Flex>
                </ModalHeader>
                
                <ModalCloseButton />
                <ModalBody>
                    <Flex>
                        <Image w="20%" borderRadius="20" src={image} />
                        <Flex direction="column" ml="1rem" p="1">
                            <Badge>{senha}</Badge>
                            <Text mt="1">{descricao}</Text>
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    { !haveTheGame ? 
                        <Button bgColor="yellow.300" mr="5" onClick={() => {getGameForMe(id)}}>
                            <Icon as={FiStar} color="yellow.500"/>
                        </Button> :
                        <Button bgColor="gray.300" mr="5" disabled>
                            <Icon as={FiStar} color="yellow.500" fill="yellow.500"/>
                        </Button> 
                    }
                    Avaliação: &nbsp;
                    <Flex bgColor="blue.500" p="3" borderRadius="10">
                        {avaliacao}
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default CardGame;