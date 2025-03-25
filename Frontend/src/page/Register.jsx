import { useState, useContext } from "react";
import { validacionForm } from "../utils/validacionFormulario";
import Swal from 'sweetalert2'
import { UserContext } from "../context/UserContext";

const Register = () => {

  const { register } = useContext (UserContext)
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    confirmarPassword: "" 
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormulario((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Usar el objeto formulario para la validación
    const resultado = validacionForm.validacionRegistro(formulario);
    
    if(!resultado.valido){
      Swal.fire({
      icon: "error",
      title: "Oops...",
      text: resultado.mensaje,
      });
      return
    }
     
    const userRegister = await register (formulario.email, formulario.password)

      if (userRegister) {
              Swal.fire({
              icon: "success",
              title: "Tu cuenta ah sido registrada correctamente"
            })
            
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ocurrio un problema al crear el Registro",
              });
            }
  };

  return (
    <div className="container mt-5">
      <div
        className="card mx-auto shadow-sm"
        style={{ maxWidth: "400px" }} 
      >
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Regístrate</h2>
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
            <div className="mb-3">
              <h5 className="card-text">Confirmar contraseña</h5>
              <input
                type="password"
                placeholder="Repite contraseña"
                className="form-control"
                name="confirmarPassword"
                value={formulario.confirmarPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Regístrate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
