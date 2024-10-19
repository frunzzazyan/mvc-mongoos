class MassageControllers{
    async setMassage(req,res){
        try {
            const massage = await req.app.locals.services.massage.setMassage(req.body)
            res.json(massage)
        } catch (error) {
            res.json("error massage")
        }
    }
}

module.exports = MassageControllers