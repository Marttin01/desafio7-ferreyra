import { Router } from "express";
import { homeController, loginController, profileController, registerController } from "../../../controllers/web/webController.js";
import { auth } from "../../../middlewares/autenticacion.js"
import { logueadosWeb } from "../../../middlewares/verificarLogueados.js";

export const webRouter = Router()

webRouter.get('/', homeController)

webRouter.get('/login', loginController)

webRouter.get('/profile', logueadosWeb ,profileController )

webRouter.get('/register',  registerController)

