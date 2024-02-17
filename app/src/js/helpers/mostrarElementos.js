console.log('Estoy aqui 2');
export function mostrarElementos() {
    const mostrarContenido = document.querySelector('.mostrarContenido');
    const moverDivForm = document.querySelector('.moverDivForm');
  
    setTimeout(() => {
      mostrarContenido.classList.add('visible');
    }, 500);
  
    setTimeout(() => {
      moverDivForm.classList.add('visible');
    }, 400);
}
