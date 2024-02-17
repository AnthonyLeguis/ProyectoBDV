const mostrarContenido = document.querySelector('.mostrarContenido');
const moverDivForm = document.querySelector('.moverDivForm');


const showElements =  () => {
  
    setTimeout(() => {
      mostrarContenido.classList.add('visible');
    }, 500);
  
    setTimeout(() => {
      moverDivForm.classList.add('visible');
    }, 400);
}
