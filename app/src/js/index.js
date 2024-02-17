const mostrarContenido = document.querySelector('.content-form-img');
const moverDivForm = document.querySelector('.div-form');
const moverDivFigure = document.querySelector('.figure');
const validacionInputs = document.querySelectorAll('.form-input');

const userRegex = /^[a-zA-Z]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/;




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
