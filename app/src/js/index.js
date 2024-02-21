const mostrarContenido = document.querySelector('.content-form-img');
const moverDivForm = document.querySelector('.div-form');
const moverDivFigure = document.querySelector('.figure');
const formulario = document.querySelector('#form');
const userLogin = document.querySelector('#input-user');
const passwordLogin = document.querySelector('#input-password');
const mensajeLogin = document.querySelector('#resultadoLogin');
const btnLogin = document.querySelector('#btn-login1');
const btnLogin2 = document.querySelector('#btn-login2');

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

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
}

function comprobarBotones() {
  const userValido = usuario.test(userLogin.value);
  const passwordValido = password.test(passwordLogin.value);

  btnLogin.disabled = !userValido || !passwordValido;
  btnLogin2.disabled = !userValido || !passwordValido;
}

userLogin.addEventListener("input", () => {
  validarInput(userLogin, usuario);
  comprobarBotones();
});

passwordLogin.addEventListener("input", () => {
  validarInput(passwordLogin, password);
  comprobarBotones();
});




