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
    } else {
        res.send('Ruta no válida');
    }
};

const vistaAdminPanel = (req, res) => {
    const ruta = req.path;
    
    if (ruta === '/register') {
    res.render('register', {
    layout: 'registerLayout',
    });
    } else {
        res.render('adminPanel', {
        layout: 'adminPanel',
        });
    }
};

const vistaRegistro = (req, res) => {
    res.render('register', {
      layout: 'registerLayout',
    });
};

module.exports = {
    vistaPrincipal,
    vistaAdminPanel,
    vistaRegistro
};