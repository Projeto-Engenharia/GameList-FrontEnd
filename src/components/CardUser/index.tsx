import React, { useContext, useEffect, useState } from 'react';
import {
    ButtonGroup,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    HStack,
    Icon,
    IconButton,
    Image,
    Input,
    Text,
    useEditableControls,
} from '@chakra-ui/react';

import { useQuery } from 'react-query';

import CardGameUser from '../CardGameUser';

import "./index.css";
import { FiEdit, FiPenTool, FiSend, FiXCircle } from 'react-icons/fi';
import api from '../../api/api';

interface ICardUser {
    bio?: string;
    user?: IUser;
    favorites?: IGames[];
}

const CardUser = ({ user, favorites }: ICardUser) => {

    const [newBio, setNewBio] = useState<string>()

    const [bio, setBio] = useState<string>('');

    useEffect(() => {
        const userStorage = localStorage.getItem("GameList@user")
        if (!userStorage) {
            throw new Error('Usuário não carregado')
        }
    }, [])


        const newGames = useQuery('newGames', async() => {
            try {
                const response = await api.get(`/api/Users/${user?.id}`)
                setBio(response.data.bio);
            } catch (error) {
                console.log(error);
            }
        });

    async function newBioSend(value: string) {
        const teste = await api.post(`/api/Users/${user?.id}/changeBio/${newBio}`)
        window.location.reload();
        return;
    }

    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <Flex>
                <Icon as={FiSend} {...getSubmitButtonProps()} />
                <Icon as={FiXCircle} {...getCancelButtonProps()} />
             </Flex>
        ) : (
            <Flex align="center">
                <Text fontWeight="bold" fontSize="large" color="gray.600">Bio</Text>
                <Icon ml="1" color="gray.300" as={FiEdit} {...getEditButtonProps()} />
            </Flex>
        ) 
    }

    return (
        <Flex borderRadius="2.5rem" boxShadow="0px 0px 30px rgba(0, 0, 0, 0.7)" maxW="22rem" w="100%" minH="45rem" direction="column" position="relative">
            <Flex
                direction="column"
                zIndex={1}
                w="100%"
                h="100%"
                borderRadius="2.5rem"
                background="linear-gradient(180deg, rgba(26, 32, 44, 0) 0%, #1A202C 28.27%);"
                filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))"
            >
                <Flex w="100%" h="100%" borderRadius="2.5rem" p="3rem" direction="column">
                    <Flex w="100%" align="center" h="25%" direction="column-reverse">
                        <Image borderRadius="full" w="8rem" h="8rem" src="https://cdn.ome.lt/gd9-IYHjEWhrCPbJzkmVUrUX7SU=/1200x630/smart/extras/conteudos/kratos1_vfVstSj.jpg" boxShadow="0px 0px 40px rgba(0, 0, 0, 1)" objectFit="cover" bgPos="center" />
                    </Flex>
                    <Flex direction="column" mt="1rem">
                        <Text fontWeight="bold" fontSize="large" color="gray.600">Nick</Text>
                        <Text fontWeight="bold" fontSize="xl" >{user?.nome}</Text>
                    </Flex>
                    <Flex direction="column" mt="0.5rem">
                        <Editable onSubmit={(value) => {
                            if(!value){
                                return
                            } else {
                                newBioSend(value)
                            }
                        }}  onChange={(value) => {
                            setNewBio(value)
                        }}>
                            <EditableControls />
                            <Text>{bio}</Text>
                            <Input as={EditableInput} />
                        </Editable>
                    </Flex>
                    <Flex direction="column" mt="0.5rem">
                        <Text fontWeight="bold" fontSize="large" color="gray.600">Jogos Favoritos</Text>
                           <Flex direction="row" mt="4" w="100%" overflowX="auto" className='scroll-bar' >
                               <HStack spacing={8}>
                            {favorites?.map(game => (
                                    <CardGameUser
                                        key={game.id}
                                        id={game.id}
                                        nome={game.nome}
                                        descricao={game.descricao}
                                        avaliacao={game.avaliacao}
                                        senha={game.senha}
                                        image={game.image}
                                        favorites={favorites}
                                    />
                                ))}
                                </HStack>
                           </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                position="absolute"
                w="100%" h="60%"
                zIndex={0} top="0"
                left="0"
                borderRadius="2.5rem 2.5rem 0px 0px"
                background="url('https://sm.ign.com/ign_br/game/h/horizon-fo/horizon-forbidden-west_7j3g.jpg') no-repeat"
                backgroundSize="100%"
            />
        </Flex>
    )
}

export default CardUser;