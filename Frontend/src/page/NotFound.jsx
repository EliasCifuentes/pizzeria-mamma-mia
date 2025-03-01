import { Link } from 'react-router-dom'
import { Container} from 'react-bootstrap'
import '../assets/css/NotFound.css'


const NotFound = () => {
  return (
    <Container id='general'>
        <h2 className='error'> 404 </h2>
        <p className='errorMensaje'>😥</p>
        <p className='errorMensaje'> Pagina no encontrada !!!</p>
        <Link to='/' className='btn btn-outline-dark mt-3'> Volver al Inicio </Link>
    </Container>
  )
}

export default NotFound