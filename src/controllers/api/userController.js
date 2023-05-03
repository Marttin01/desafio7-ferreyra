import { userModel } from "../../dao/models/userModel.js"
import { hashear } from "../../utils/criotografia.js"

// export async function userRegisterController  (req,res) {
    
    // let exist = await userModel.findOne({$and: [{email:req.body.email}, {password:req.body.password}]})
    // if(exist){
    //     throw new Error('Usuario ya registrado')
    // }

    // if(req.body.email === 'adminCoder@coder.com' && req.body.password === 'adminCod3r123'){
    //     req.body.rol = 'admin'
    // }else{
    //     req.body.rol= 'user'
    // }

    // const {first_name, last_name, email, password, rol} = req.body

    // const user = {
    //     first_name:first_name,
    //     last_name:last_name,
    //     email:email,
    //     password: hashear(password),
    //     rol:rol
    // }


    // const userCreate = await userModel.create({...user})

    // req.login(user,error => {
    //     if(error){
    //         next(new Error('Fallo el login!'))
    //     }else{
    //         res.status(201).json(req.user)
    //     }
    // })
    
// }

export async function userGetController (req,res,next) {
    const users = await userModel.find()
    res.json(users)
}

// export async function 