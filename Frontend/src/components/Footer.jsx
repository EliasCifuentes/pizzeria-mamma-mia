import '../assets/css/Footer.css'
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <section className='footer-section w-100'>
      <p className='text-footer'> © {new Date().getFullYear()} - Pizzería Mamma Mia! - Todos los derechos reservados </p>
    </section>
    
  )
}

export default Footer