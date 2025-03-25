import { Container} from 'react-bootstrap'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

  const { profile, email, logout } = useContext (UserContext); 
 
  useEffect(() => {
    profile()
  }, )
  return (
    <Container className= 'd-flex flex-column justify-content-center align-items-center vh-100 vw-100  bg-white text-dark gap-5'>
        <h2> Bienvenido Usuario: <span> {email} </span></h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-dark" onClick={logout}> Cerrar Sesion </button>
        </div>
    </Container>
  )
}

export default Profile