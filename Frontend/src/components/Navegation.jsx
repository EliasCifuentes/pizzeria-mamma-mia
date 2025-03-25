import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { formatoMoneda } from "../utils/formatoNumeros";
import tipoProp from 'prop-types';//para poder definir la validacion de prop
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';


const Navegation = () => {
  const {precioTotal} = useContext(CartContext);
  const { token, logout, email } = useContext(UserContext);
  
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className='vw-100'>
      <Container className='w-100'>
        <Navbar.Brand href="#">Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Link to='/' className='text-decoration-none ms-3 text-white'> 🍕 Home </Link>
            {token ? (
              <>
                <Link to='/profile' className='text-decoration-none ms-3 text-white'> 🔓 Profile </Link>
                <Link to = '/' className='text-decoration-none ms-3 text-white' onClick={logout}> 🔓 Logout </Link>
              </>
            ) : (
              <>
                <Link to='/login' className='text-decoration-none ms-3 text-white'> 🔐 Login </Link>
                <Link to='/register' className='text-decoration-none ms-3 text-white' > 🔐 Register </Link>
              </>
            )}
          </Nav>
          <Nav className="d-flex justify-content-between align-items-center">
            <p className="text-white m-0"> Bienvenido: {email}</p>
            <Link to='/cart'className="text-info text-decoration-none ms-3 text-white">
                🛒 Total $ {formatoMoneda(precioTotal)}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Navegation.propTypes = {
  token: tipoProp.bool,
  //total: tipoProp.number,
};

export default Navegation