class UsersServices{
    constructor(models){
        this.models = models
    }
    async addUsers(body){
        const a = await this.models.users(body)
        const user = await a.save()
        return user        
    }
}

module.exports = UsersServices