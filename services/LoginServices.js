class LoginServices{
    constructor(models){
        this.models = models
    }
    async loginUser(body){
        const b = await this.models.login(body)
        const login = await b.save()
        return login
    }
}

module.exports = LoginServices