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
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/; // Expresión regular para la contraseña

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


formulario.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = userLogin.value;
  const pass = passwordLogin.value;

  try {
    const response = await fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, pass })
    });

    if (response.status === 200) {
      const responseData = await response.json();
      const mensaje = responseData.mensaje;
      mensajeLogin.classList.remove("d-none");
      mensajeLogin.classList.add("alert-success");
      mensajeLogin.querySelector("strong").textContent = mensaje;
      mensajeLogin.querySelector("p").textContent = "Cargando...";

      setTimeout(() => {
        window.location.href = "/adminPanel";
      }, 2000);

    } else if (response.status === 401) {
      const data = await response.json();
      mensajeLogin.classList.remove("d-none");
      mensajeLogin.classList.add("alert-danger");
      mensajeLogin.querySelector("strong").textContent = "Error de autenticación";
      mensajeLogin.querySelector("p").textContent = data.mensaje;

      // Redirection to the login page
      setTimeout(() => {
        redirectToLogin();
      }, 2500);

    } else {
      // Manejar otros errores
      console.error("Error inesperado:", response.status, await response.text());
      mensajeLogin.classList.remove("d-none");
      mensajeLogin.classList.add("alert-danger");
      mensajeLogin.querySelector("strong").textContent = "Error";
      mensajeLogin.querySelector("p").textContent = "Ha ocurrido un error inesperado.";
    }
  } catch (error) {
    console.error("Error durante la autenticación:", error);
    mensajeLogin.classList.remove("d-none");
    mensajeLogin.classList.add("alert-danger");
    mensajeLogin.querySelector("strong").textContent = "Error";
    mensajeLogin.querySelector("p").textContent = "Ha ocurrido un error inesperado.";
  }
});

function redirectToLogin() {
  window.location.href = "/";
}




