import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import { Strategy as LocalStrategy } from "passport-local";
import { hashear, validarIguales } from "../utils/criotografia.js";
import { userModel } from "../dao/models/userModel.js";
import { githubCallbackUrl, githubClientId, githubClientSecret } from "../config/auth.config.js";

passport.use('local', new LocalStrategy({usernameField: 'email' }, async (username,password,done) => {

    const usuario = await userModel.findOne({email: username})
        if(!usuario){
            return done( new Error('No encontrado'))
        }
        if(!validarIguales(password, usuario.password)){
            return done(new Error('No coinciden contraseñas'))
        }
        delete usuario.password
        console.log(usuario)
        done(null,usuario)
        
}))


passport.use('github', new GithubStrategy ({
    clientID: githubClientId,
    clientSecret: githubClientSecret,
    callbackURL: githubCallbackUrl
}, async (accessToken, refreshToken, profile, done) => {
    console.log(profile)
    let user
    try {
        user = await userModel.findOne({email:profile.username})
    } catch (error) {
        user = userModel.create({
            email:profile.username,
        })
        
    }
    done(null,user)
}))

passport.serializeUser((user, next) => { next(null, user._id) })
passport.deserializeUser((user, next) => { next(null, user) })

export const passportInitialize = passport.initialize()
export const passportSession = passport.session()

export const registerUserPass = passport.authenticate('register', { failWithError:true})
export const autenticacionUserPass = passport.authenticate('local', { failWithError: true })
export const autenticacionGitHub = passport.authenticate('github', { scope: ['user:email'] })
export const autenticacionPorGitHub_CB = passport.authenticate('github', { failWithError: true})