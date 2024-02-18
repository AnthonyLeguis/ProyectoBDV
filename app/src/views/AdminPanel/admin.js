const hamburguer = document.querySelector('#toggle-btn');
const sidebar = document.querySelector('#sidebar')

hamburguer.addEventListener('click', () => {
    sidebar.classList.toggle("expand");
})
