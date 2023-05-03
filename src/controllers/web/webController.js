export function loginController (req,res,next)  {
    res.render('login', {
        pageTitle:'Loguearse'
    })
}

export function profileController (req,res,next) {
    res.render('profile', {
        pageTitle:'Perfil',
        welcome:`Bienvenido devuelta a tu perfil ${req.user.first_name}`,
        email:req.user.email,
        rol:req.user.rol
    })
} 

export function registerController (req,res,next)  {
    res.render('register', {
        pageTitle:'Register'
    })
}

export function homeController (req,res,next) {
    res.render('inicio',{
        pageTitle:'Inicio'
    })
}