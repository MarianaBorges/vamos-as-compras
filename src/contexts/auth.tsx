import React, {
    createContext, 
    useContext, 
    useState, 
    useEffect, 
    ReactNode
} from "react";

import { 
    register, 
    login, 
    getUser 
} from "../repository/auth";
import { User } from "../types/auth";

interface AuthContextProps{
    registerUser: (data: User ) => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<User>({} as User);

    async function registerUser(data: User){
        try {
            const newUser = await register(data);
        } catch (error) {
            console.error(error)
        }
    }

    return <AuthContext.Provider value={{registerUser}}>
        {children}
    </AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}