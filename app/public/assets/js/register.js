const nombreInput = document.getElementById('nameRegistro');
const passwordInput = document.getElementById('passwordRegistro');
const btnRegistrar = document.querySelector('button[type="submit"]');
const formularioRegistro = document.getElementById('formRegistro');
document.getElementById('usuarioRegistro').value

const nombreRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

function mostrarError(mensaje) {
    const respuestaFormulario = document.getElementById('respuestaFormulario');
    respuestaFormulario.classList.add('alert-danger');
    respuestaFormulario.innerHTML = mensaje;
}

function mostrarExito(mensaje) {
    const respuestaFormulario = document.getElementById('respuestaFormulario');
    respuestaFormulario.classList.add('alert-success');
    respuestaFormulario.innerHTML = mensaje;
}

function validarUsuario(nombre, password) {
    const nombreValido = nombreRegex.test(nombre);
    const passwordValido = passwordRegex.test(password);

    if (!nombreValido) {
        return 'El nombre solo puede contener letras y números sin espacios.';
    }

    if (!passwordValido) {
        return 'La contraseña debe tener entre 8 y 16 caracteres, incluyendo una mayúscula, una minúscula, un caracter especial y un número.';
    }

    return true;
}

btnRegistrar.addEventListener('click', (event) => {
    event.preventDefault();

    const nombre = nombreInput.value;
    const password = passwordInput.value;

    const mensajeValidacion = validarUsuario(nombre, password);

    if (mensajeValidacion !== true) {
        mostrarError(mensajeValidacion);
        setTimeout(() => {
          formularioRegistro.reset();
        }, 2000);
        return;
    }

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (response.ok) {
            mostrarExito('Usuario registrado exitosamente!');
            setTimeout(() => {
                window.location = '/';
            }, 2000);
        } else {
            mostrarError('Ha ocurrido un error al registrar el usuario.');
        }
    });
});