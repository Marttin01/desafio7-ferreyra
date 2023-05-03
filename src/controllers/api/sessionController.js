export async function logoutSessionController (req,res) {
    // req.session.destroy(err => {
    //     if(err){
    //         return console.log(err)
    //     }
    //     return res.redirect('/login')
    // })
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