import {useContext,useState,createContext} from "react";
import {auth} from '../firebase'

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');

    const value = {
        user,
    }
}

return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;