const vistaPrincipal = (req, res) => {
    const ruta = req.path;

    if (ruta === '/') {
        res.render('home', {
            layout: 'main',
            contenido: {
                titulo: 'Página principal',
                contenido: 'Este es el contenido de la página principal.'
            }
        });
    } else if (ruta === '/login') {
        res.render('login', {
            layout: 'login',
            contenido: {
                titulo: 'Iniciar sesión',
                contenido: 'Formulario de inicio de sesión.'
            }
        });
    } else {
        res.send('Ruta no válida');
    }
};

module.exports = {
    vistaPrincipal,
};