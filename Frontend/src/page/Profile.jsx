import { Container} from 'react-bootstrap'

const Profile = () => {
  return (
    <Container className= 'd-flex flex-column justify-content-center align-items-center vh-100 vw-100  bg-white text-dark gap-5'>
        <h2> Usuario: <span>eliascifuentes.m@gmail.com </span></h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-dark"> Cerrar Sesion </button>
        </div>
    </Container>
  )
}

export default Profile