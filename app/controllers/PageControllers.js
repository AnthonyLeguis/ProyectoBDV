const vistaPrincipal = (req, res) => {
    res.render('home')
}

const vistaAdmin = (req, res) => {
    res.render('admin')
}

const vistaTables = (req, res) => {
    res.render('tables')
}

module.exports = {
    vistaPrincipal,
    vistaAdmin,
    vistaTables
}