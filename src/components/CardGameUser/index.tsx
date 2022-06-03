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
    useDisclosure
} from '@chakra-ui/react';
import { url } from 'inspector';

import { FiExternalLink, FiStar, FiX } from 'react-icons/fi'
import { AuthContext } from '../../hooks/AuthHook';
import api from '../../api/api';

interface IGamesProps extends IGames {
    favorites?: IGames[];
}

const CardGameUser = ( { id, nome, senha, descricao, avaliacao, image, desenvolvedora, favorites}: IGamesProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useContext(AuthContext)
    

    

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
                        
                        { favorites?.find(item => item.id === id) ?  <Icon color="yellow.300" fill="yellow.300"  as={FiStar} ml="2" onClick={async () => {
                            await api.put(`/api/Users/${user.id}/removeFavorite/${id}`) 
                            window.location.reload();
                        }} /> 
                        : 
                        <Icon color="yellow.300"  as={FiStar} ml="2" 
                        onClick={async () => {
                            await api.put(`/api/Users/${user.id}/addFavorite/${id}`) 
                            window.location.reload();
                        }}
                        /> }
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
                    <Flex w="100%" align="center" justifyContent="space-between">
                        <Flex>
                            <Button color="blue.600" 
                            onClick={() => {  
                                    window.open(desenvolvedora, '_blank')
                                }} >Desenvolvedora <Icon as={FiExternalLink} />
                            </Button>
                            <Flex ml="4" bgColor="red.600" p="3" borderRadius="10" _hover={{  
                                backgroundColor: "red.400"
                            }} onClick={async () => {
                                await api.put(`/api/Users/${user.id}/removeGame/${id}`)
                                window.location.reload();
                            }}>
                                <Icon  as={FiX} strokeWidth="3" stroke="red.900" />
                            </Flex>
                        </Flex>
                        <Flex align="center">
                            Avaliação: &nbsp;
                            <Flex bgColor="blue.500" p="3" borderRadius="10">
                                {avaliacao}
                            </Flex> 
                        </Flex>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default CardGameUser;