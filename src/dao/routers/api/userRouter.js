import { Router } from "express";
import { userGetController, userRegisterController } from "../../../controllers/api/userController.js";

export const userRouter = Router()

userRouter.post('/register', userRegisterController)   //postUsers

userRouter.get('/', userGetController) //getUsers

// userRouter.post('/login', userLoginController)  //ESTO VA A SER MANEJADO POR PASSPORT

//logoutSession (ESTO VA EN UN ROUTER DE SESSION)