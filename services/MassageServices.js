class MassageServices{
    constructor(models){
        this.models = models
    }
    async setMassage(body){
        const e = await this.models.massage(body)
        const massage = await e.save()
        return massage
    }
}

module.exports = MassageServices