import { formatoMoneda } from "../utils/formatoNumeros";
import tipoProp from 'prop-types';//para poder definir la validacion de prop


const Navbar = ({token = false, total = 25000}) => {

  
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">🍕 Home</a>
        </li>
        {token ?(
          <>
          <li className="nav-item">
            <a className="nav-link" href="#">🔓 Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">🔓 Logout</a>
          </li>
          </>
        ):(
          <>
           <li className="nav-item">
            <a className="nav-link" href="#">🔐 Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">🔐 Register</a>
          </li>
          </>
        )}
       
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item" >
        <a className="nav-link text-info" href="#"> 🛒 Total $ {formatoMoneda(total)}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
  )
}

Navbar.propTypes = {
  token: tipoProp.bool,
  total: tipoProp.number,
};

export default Navbar