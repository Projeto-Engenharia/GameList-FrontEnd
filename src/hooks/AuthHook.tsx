import { toast, useToast } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import api from '../api/api';

type User = {
    name: string;
    email: string;
}

type SignInData = {
    nick: string;
    password: string;
}

type AuthContextType = {
    user: IUser;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void> ;
    signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
    const toast = useToast();

    const [user, setUser] = useState<any>();

    const isAuthenticated = !!user;

    useEffect(() => {
        const existsUser = localStorage.getItem('GameList@user');
        if(existsUser){
            let usuario = JSON.parse(existsUser);
            setUser(usuario);
        }
    }, [])

    async function signIn({ nick, password }: SignInData) {
        try {
            const response = await api.get<IUser[]>('/api/Users');
            
            const user = response.data.find(user => user.nome === nick && user.senha === password);

            if(!user) {
                throw new Error('Usuário não encontrado')
            } 
            
            localStorage.setItem('GameList@user', JSON.stringify(user));
            window.location.replace('/')
        } catch (error) {
            toast({
                title: 'Error',
                description: "Invalid nick/password",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
        }
        
    }

    async function signOut() {
        localStorage.removeItem('GameList@user');
        window.location.replace("/")
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}
