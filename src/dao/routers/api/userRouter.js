import { Router } from "express";
import { userGetController } from "../../../controllers/api/userController.js";

export const userRouter = Router()

// userRouter.post('/register', userRegisterController)   //postUsers MANEJADO POR PASSPORT

userRouter.get('/', userGetController) //getUsers

// userRouter.post('/login', userLoginController)  //ESTO VA A SER MANEJADO POR PASSPORT

//logoutSession (ESTO VA EN UN ROUTER DE SESSION)