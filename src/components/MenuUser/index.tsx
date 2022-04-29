import React, { useContext } from 'react';
import {
    Flex,
    Icon,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FiUser } from 'react-icons/fi'
import { AuthContext } from '../../hooks/AuthHook';


const MenuUser = (user: IUser) => {
    const { signOut } = useContext(AuthContext)

    return (
        <Menu>
            <MenuButton  p="1rem" borderRadius={20} boxShadow="0px 0px 30px rgba(0, 0, 0, 0.7)" zIndex={10}>
                <Flex w="100%" align="center">
                    <Icon as={FiUser} />
                    <Flex direction="column">
                        <Text ml="1rem"fontWeight="bold">{user.nome}</Text>
                        <Text ml="1rem" fontSize="10px" color="gray.600" fontWeight="">• {user.id}</Text>
                    </Flex>
                </Flex>
            </MenuButton>
            <MenuList zIndex={10} bgColor="gray.800" border="none">
                <MenuItem onClick={() => { window.location.replace('/') }} _hover={{ bgColor: "gray.900" }}>My Games</MenuItem>
                <MenuItem onClick={() => { window.location.replace('/games') }} _hover={{ bgColor: "gray.900" }}>Games</MenuItem>
                <MenuItem onClick={signOut} _hover={{ bgColor: "gray.900" }} >Logout</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuUser;