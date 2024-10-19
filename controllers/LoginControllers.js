class LoginControllers{

    async loginUser(req,res){
        try {
            const login = await req.app.locals.services.login.loginUser(req.body)
            res.json(login)
        } catch (error) {
            res.json("error login")
        }
    }
}

module.exports = LoginControllers