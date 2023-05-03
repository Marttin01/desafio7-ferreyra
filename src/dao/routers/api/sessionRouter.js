import { Router } from "express";
import { logoutSessionController, postSessionController } from "../../../controllers/api/sessionController.js";
import { autenticacionGitHub, autenticacionPorGitHub_CB, autenticacionUserPass } from "../../../middlewares/passport.js";

export const sessionRouter = Router()

//login local
sessionRouter.post('/', autenticacionUserPass ,postSessionController)
//login con github
sessionRouter.get('/github', autenticacionGitHub)
sessionRouter.get('/githubcallback', autenticacionPorGitHub_CB, (req,res,next) => {res.redirect('/profile')})
//logut
sessionRouter.post('/logout', logoutSessionController)
