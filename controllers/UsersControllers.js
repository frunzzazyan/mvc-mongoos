class UsersControllers{
    async addUsers(req,res){
        try {
            const users = await req.app.locals.services.users.addUsers(req.body)
            res.json(users)
        } catch (error) {
            res.json("error")
            
        }
    }
}

module.exports = UsersControllers