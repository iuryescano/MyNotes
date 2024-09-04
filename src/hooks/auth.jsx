import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/";

export const AuthContext = createContext({});

function AuthProvider({ children }) { 
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@mynotes:user", JSON.stringify(user));
            localStorage.setItem("@mynotes:token", token);
            
            console.log(user, token);
            //api.defaults.headers.authorization = `Bearer ${token}`;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });

        } catch (error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao fazer login. Tente novamente.");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@mynotes:user");
        localStorage.removeItem("@mynotes:token");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@mynotes:token");
        const user = localStorage.getItem("@mynotes:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);


    return (
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            user: data.user 
            }}
            >
                {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };