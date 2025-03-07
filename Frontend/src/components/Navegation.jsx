import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { formatoMoneda } from "../utils/formatoNumeros";
import tipoProp from 'prop-types';//para poder definir la validacion de prop
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const Navegation = ({token = true}) => {
  const {precioTotal} = useContext(CartContext);

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
                <Link to='/logout' className='text-decoration-none ms-3 text-white'> 🔓 Logout </Link>
              </>
            ) : (
              <>
                <Link to='/login' className='text-decoration-none ms-3 text-white'> 🔐 Login </Link>
                <Link to='/register' className='text-decoration-none ms-3 text-white'> 🔐 Register </Link>
              </>
            )}
          </Nav>
          <Nav>
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