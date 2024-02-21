const mostrarContenido = document.querySelector('.content-form-img');
const moverDivForm = document.querySelector('.div-form');
const moverDivFigure = document.querySelector('.figure');
const formulario = document.querySelector('#form');
const userLogin = document.querySelector('#input-user');
const passwordLogin = document.querySelector('#input-password');
const mensajeLogin = document.querySelector('#resultadoLogin');
const btnLogin = document.querySelector('#btn-login1');
const btnLogin2 = document.querySelector('#btn-login2');

document.addEventListener('DOMContentLoaded', () => {

  function showElements() {
      
    setTimeout(() => {
        mostrarContenido.classList.add('visible');
    }, 500);
    
    setTimeout(() => {
        moverDivForm.classList.add('visible');
        moverDivFigure.classList.add('visible');
    }, 550);
  };

  showElements()

});

const usuario = /^[a-zA-Z0-9]+$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/;

function validarInput(input, regex) {
  const valor = input.value;
  const valido = regex.test(valor);

  input.classList.toggle("form-input-success", valido);
  input.classList.toggle("form-input-danger", !valido);

  btnLogin.disabled = !valido;
  btnLogin2.disabled = !valido;
}

userLogin.addEventListener("input", () => {
  validarInput(userLogin, usuario);
});

passwordLogin.addEventListener("input", () => {
  validarInput(passwordLogin, password);
});




