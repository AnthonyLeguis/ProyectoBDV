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
    res.render('adminPanel', {
      layout: 'adminPanel'
    });
};

module.exports = {
    vistaPrincipal,
    vistaAdminPanel
};