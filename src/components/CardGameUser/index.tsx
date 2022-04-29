import React from 'react';
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
    useDisclosure
} from '@chakra-ui/react';
import { url } from 'inspector';

import { FiStar } from 'react-icons/fi'



const CardGameUser = ( { id, nome, senha, descricao, avaliacao, image}: IGames) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Icon fill="yellow.300" color="yellow.300" as={FiStar} ml="2"/>
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

export default CardGameUser;