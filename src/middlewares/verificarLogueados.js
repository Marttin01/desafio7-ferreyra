export function logueadosApi(req,res,next) {
    if(!req.isAuthenticated()){
        return next(new Error('Error en la autentificacion'))
    }
    next()
}

export function logueadosWeb(req,res,next){
    if(!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next()
}