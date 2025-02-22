import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <section className='footer-section'>
      <p className='text-footer'> © {new Date().getFullYear()} - Pizzería Mamma Mia! - Todos los derechos reservados </p>
    </section>
    
  )
}

export default Footer