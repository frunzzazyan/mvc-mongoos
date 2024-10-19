class CarsControllers{
    async addCars(req,res){
        try {
            const cars = await req.app.locals.services.cars.addCars(req.body)
            res.json(cars)
        } catch (error) {
            res.json("err cars add")
        }
    }    
}

module.exports = CarsControllers