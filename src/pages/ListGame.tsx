import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Button, Flex, Text, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { AuthContext } from '../hooks/AuthHook';
import api from '../api/api';

export default function ListGame() {
    const { signOut } = useContext(AuthContext)

    const [listUser, setListUser] = useState<any[]>();

    useMemo(async() => {
        const response = await api.get('/users/list');
        return setListUser(response.data);
    }, [])

    return(
        <Flex w="100%" direction="column">
            <Text mb="10px">Usuários</Text>
                <TableContainer>
                    <Table variant='unstyled'>
                        <Thead>
                            <Tr>
                                <Th>Nick</Th>
                                <Th>Email</Th>
                                <Th>Password</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {listUser?.map(user => (
                            <Tr>
                                <Td>{user.nick}</Td>
                                <Td>{user.email}</Td>
                                <Td>{user.password}</Td>
                            </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            <Button w="100px" color="white" bgColor="red.400" _hover={{ bgColor: "red.600" }} onClick={signOut}>Logout</Button>
        </Flex>
    )
}
