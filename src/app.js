import express from 'express'
import { engine } from 'express-handlebars'
import sesion from './middlewares/sesion.js'
import { apiRouter } from './dao/routers/api/apiRouter.js'
import { webRouter } from './dao/routers/web/webRouter.js'
import { passportInitialize, passportSession } from './middlewares/passport.js'

export const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.use(sesion)

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use(passportInitialize, passportSession)

app.use('/api', apiRouter )
app.use('/', webRouter)


