function auth (req, res, next) {
    if (req.session?.username === ' jony' && req.session?.admin){
        return next()
    }

    return res.status(401).send('error de authentication')
}

module.exports = {
    auth
}