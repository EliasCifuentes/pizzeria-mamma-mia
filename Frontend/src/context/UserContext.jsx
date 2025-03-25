import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import PropTypes from "prop-types";

// Se crea el contexto
export const UserContext = createContext();

// Creo el proovedor

    export const UserProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [email ,setEmail ] = useState (localStorage.getItem('email') || null)
    const navigate = useNavigate();

// Metodo para el login

    const auth = async (email, password) => {
        try {
        const URL = 'http://localhost:5000/api/auth/login'
        const playload = {email, password}
        const user = await axios.post(URL, playload)

        const userToken = user.data.token
        localStorage.setItem('token', userToken)
        localStorage.setItem('email', email)
        setToken(userToken)
        setEmail(email)

        return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

// Metodo para registrar usuario

    const register = async (email, password) => {
        try {
        const URL = 'http://localhost:5000/api/auth/register'
        const playload = {email, password}
        const user = await axios.post(URL, playload)

        const userToken = user.data.token
        localStorage.setItem('token', userToken)
        localStorage.setItem('email', email)
        setToken(userToken)
        setEmail(email)

        return true
        } catch (error) {
            console.error(error);
            return false
        }
    }


// Metodo para cerrar sesion

    const logout = () => {
        Swal.fire("Sesion Finalizada");
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        setToken(null);
        setEmail(null);
        navigate("/"); // Redirigir al inicio
    }

// Metodo para obetener perfil de usuario

    const profile = async () => {
        const token = localStorage.getItem('token') 
        if(token){
            try {
                const res = await axios.get('http://localhost:5000/api/auth/me',{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
                )
            setEmail(res.data.email)
                
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <UserContext.Provider value = {{token, email, logout, auth, register, profile}}>
        {children}
        </UserContext.Provider>
    )
}

// Validación de PropTypes
UserProvider.propTypes = {
children: PropTypes.node.isRequired,
};