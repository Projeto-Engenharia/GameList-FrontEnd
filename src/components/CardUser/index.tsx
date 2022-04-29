import React from 'react';
import {
    Flex,
    HStack,
    Image,
    Text
} from '@chakra-ui/react';

import Carousel from 'nuka-carousel';
import CardGame from '../Cardgame';
import CardGameUser from '../CardGameUser';

import "./index.css";

interface ICardUser {
    games?: IGames[];
    user?: IUser;
}

const CardUser = ({ games, user }: ICardUser) => {

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
                        <Text fontWeight="bold" fontSize="large" color="gray.600">Bio</Text>
                        <Text fontWeight="medium" fontSize="medium" >{user?.bio ? user.bio : "Sem bibliografia"}</Text>
                    </Flex>
                    <Flex direction="column" mt="0.5rem">
                        <Text fontWeight="bold" fontSize="large" color="gray.600">Jogos Favoritos</Text>
                           <Flex direction="row" mt="4" w="100%" overflowX="auto" className='scroll-bar' >
                               <HStack spacing={8}>
                            {games?.map(game => (
                                    <CardGameUser
                                        key={game.id}
                                        id={game.id}
                                        nome={game.nome}
                                        descricao={game.descricao}
                                        avaliacao={game.avaliacao}
                                        senha={game.senha}
                                        image={game.image}
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