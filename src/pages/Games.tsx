import { useContext, useEffect, useState } from 'react';
import { Flex, Text, Stack, Image, HStack, SimpleGrid, Grid } from '@chakra-ui/react';
import { AuthContext } from '../hooks/AuthHook';
import api from '../api/api';
import CardGame from '../components/Cardgame';
import CardUser from '../components/CardUser';

import LogoIcon from '../assets/LogoIcon.svg';
import MenuUser from '../components/MenuUser';
import CardGameUser from '../components/CardGameUser';
import { useQuery } from 'react-query';


export default function Games() {
    const { user } = useContext(AuthContext)
    

    // const [user, setUser] = useState<IUser>();
    const [games, setGames] = useState<IGames[]>();
    const [myGames, setMyGames] = useState([]);

    useEffect(() => {
        // const userStorage = localStorage.getItem("GameList@user")
        // if (!userStorage) {
        //     throw new Error('Usuário não carregado')
        // }
        // setUser(JSON.parse(userStorage));

        async function getGames() {
            const response = await api.get('/api/Games');
            setGames(response.data);
        }

        getGames();
    }, [])

    const userGames = useQuery('userGames', async() => {
        try {
            const response = await api.get(`/api/Users/${user?.id}`)
            setMyGames(response.data.games);
        } catch (error) {
            console.log(error);
        }
    });


    return (
        <Flex w="100%" direction="column" p="1.5rem" >
            <Stack spacing={5}>
                <Flex w="100%" h="4.5rem" align="center" p="10px" justify="space-between">
                    <Image src={LogoIcon} w="7.5rem" h="2.5rem"/>
                    <MenuUser key={user?.id} bio={user?.bio} games={user?.games} id={user?.id} nome={user?.nome} senha={user?.senha}   />
                </Flex>
                <Flex w="100%" direction="row" p="0.5rem" >
                    <Flex  px="0.5rem" minWidth="80%" w="100%" h="100%" direction="column">
                        <Stack spacing={8}>
                            <Flex borderRadius="6.5rem" boxShadow="0px 0px 30px rgba(0, 0, 0, 0.7)" bg="pink" bgColor="gray.800" w="100%" h="4.5rem" justify="center" align="center">
                                <Text>Games</Text>
                            </Flex>
                            
                            <Flex w="100%" direction="row">
                                <SimpleGrid w="100%" columns={[2, 4, 7]} spacing={4}>
                                    {games?.map(game => {
                                        let alreadyHaveTheGame = false;
                                        if(myGames.find((item: any) => item.id === game.id)){
                                            alreadyHaveTheGame = true;
                                        }
                                    return(
                                        <CardGame
                                            key={game.id} 
                                            id={game.id}
                                            nome={game.nome}
                                            descricao={game.descricao}
                                            avaliacao={game.avaliacao}
                                            senha={game.senha}
                                            image={game.image}
                                            haveTheGame={alreadyHaveTheGame}
                                            desenvolvedora={game.desenvolvedora}
                                        />
                                    )})}
                                </SimpleGrid>
                            </Flex>
                        </Stack>
                    </Flex>
                </Flex>
            </Stack>
        </Flex>
    )
}
