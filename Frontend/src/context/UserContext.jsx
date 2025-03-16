import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Se crea el contexto
export const UserContext = createContext();

// Creo el proovedor

    export const UserProvider = ({children}) => {
    const [token, setToken] = useState(true);
    const navigate = useNavigate();

// Metodo para cambiear el token a false

    const logout = () => {
        alert("La sesion se ah cerrado correctamente");
        setToken(false);
        navigate("/"); // Redirige a Home después de cerrar sesión
    }

    return (
        <UserContext.Provider value = {{token, setToken, logout}}>
        {children}
        </UserContext.Provider>
    )
}

