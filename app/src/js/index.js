const mostrarContenido = document.querySelector('.content-form-img');
const moverDivForm = document.querySelector('.div-form');
const moverDivFigure = document.querySelector('.figure');
const validacionInputs = document.querySelectorAll('.form-input');

const expresiones = {
    usuario: /^[a-zA-Z]+$/,
    contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
};

validacionInputs.forEach((input) => {

    input.addEventListener('input', () => {
      const { value } = input;
      const regex = expresiones[input.name];
      const isValid = regex.test(value);
  
      if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
      }
  
      // Mostrar mensajes de error específicos
      const errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
  
      if (input.classList.contains('invalid')) {
        switch (input.name) {
          case 'usuario':
            errorElement.textContent = 'El usuario solo puede contener letras.';
            break;
          case 'contrasena':
            errorElement.textContent = 'La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo.';
            break;
          default:
            break;
        }
        input.after(errorElement);
      } else {
        // Eliminar mensaje de error anterior
        const existingError = document.querySelector('.error-message');
        if (existingError) {
          existingError.remove();
        }
      }
    });
});


function showElements() {
    
    setTimeout(() => {
        mostrarContenido.classList.add('visible');
    }, 500);
    
    setTimeout(() => {
        moverDivForm.classList.add('visible');
        moverDivFigure.classList.add('visible');
    }, 550);
};

document.addEventListener('DOMContentLoaded', showElements);
