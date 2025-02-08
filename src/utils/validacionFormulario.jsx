
export const validacionForm = {
    textoVacio: (value) => value.trim() === '',
    largoMinimo: (value, min) => value.length >= min,
    confirmarPassword: (value1, value2) => value1 === value2,

    validacionRegistro: ({ email, password, confirmarPassword }) => {
        if (validacionForm.textoVacio(email) ||  validacionForm.textoVacio(password) || validacionForm.textoVacio(confirmarPassword)) {
            return { valido: false, mensaje: 'No puede existir campos vacíos' };
        }

        if (!validacionForm.largoMinimo(password, 6)) {
            return { valido: false, mensaje: 'La contraseña debe contener mínimo 6 caracteres' };
        }

        if (!validacionForm.confirmarPassword(password, confirmarPassword)) {
            return { valido: false, mensaje: 'Las contraseñas no coinciden' };
        }

        return { valido: true, mensaje: 'Registro Exitoso!!' };
    },

    validacionLogin: ({ email, password}) => {
        if (validacionForm.textoVacio(email) ||  validacionForm.textoVacio(password)) {
            return { valido: false, mensaje: 'No puede existir campos vacíos' };
        }

        if (!validacionForm.largoMinimo(password, 6)) {
            return { valido: false, mensaje: 'La contraseña debe contener mínimo 6 caracteres' };
        }

        return { valido: true, mensaje: 'Inicio de Sesion Exitoso!!' };
    }
};