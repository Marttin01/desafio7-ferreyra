import { Router } from "express";
import { logoutSessionController, postSessionController, registerSessionController } from "../../../controllers/api/sessionController.js";
import { autenticacionGitHub, autenticacionPorGitHub_CB, autenticacionUserPass, registerUserPass } from "../../../middlewares/passport.js";

export const sessionRouter = Router()

//register
sessionRouter.post('/register', registerUserPass, registerSessionController)
//login local
sessionRouter.post('/', autenticacionUserPass ,postSessionController)
//login con github
sessionRouter.get('/github', autenticacionGitHub)
sessionRouter.get('/githubcallback', autenticacionPorGitHub_CB, (req,res,next) => {res.redirect('/profile')})
//logut
sessionRouter.post('/logout', logoutSessionController)
