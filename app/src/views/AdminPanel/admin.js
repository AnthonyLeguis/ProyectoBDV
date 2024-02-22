const hamburguer = document.querySelector('#toggle-btn');
const sidebar = document.querySelector('#sidebar')

hamburguer.addEventListener('click', () => {
    sidebar.classList.toggle("expand");

});

function isLargeScreen() {
    return window.innerWidth >= 950;
  }
  
  function expandSidebar() {
    sidebar.classList.add("expand");
  }
  
  function collapseSidebar() {
    sidebar.classList.remove("expand");
  }
  
  window.addEventListener('load', () => {
    if (isLargeScreen()) {
      expandSidebar();
    }
  });
  
  window.addEventListener('resize', () => {
    if (isLargeScreen()) {
      expandSidebar();
    } else {
      collapseSidebar();
    }
  });
