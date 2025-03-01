import { useState } from "react";
import { validacionForm } from "../utils/validacionFormulario";
import Swal from 'sweetalert2'

const Login = () => {
// Estados para los datos del formulario
    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario((prev) => ({
          ...prev,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Usar el objeto formulario para la validación
        const resultado = validacionForm.validacionLogin(formulario);
        
        Swal.fire({
            title: resultado.valido ? "Éxito" : "Error",
            text: resultado.mensaje,
            icon: resultado.valido ? "success" : "error",
            confirmButtonText: "Aceptar"
        });
    
      };

  return (
    <div className="container mt-5">
      <div
        className="card mx-auto shadow-sm"
        style={{ maxWidth: "400px" }} 
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Inicia Sesion </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h5 className="card-text">Email</h5>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="form-control"
                name="email"
                value={formulario.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h5 className="card-text">Contraseña</h5>
              <input
                type="password"
                placeholder="Ingresa contraseña"
                className="form-control"
                name="password"
                value={formulario.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Inicia Sesion
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login