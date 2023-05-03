export async function logoutSessionController (req,res) {
     req.logout(err => {
        res.sendStatus(200)
    })
}

export function getSessionController (req,res) {
    res.json(req.user)
}

export function postSessionController (req,res) {
    console.log('paso por el postsession')
    res.sendStatus(201)
}

export function registerSessionController (req,res) {
    console.log('Paso por el registerSession')
    res.sendStatus(201)
}