class CarsServices{
    constructor(models){
        this.models = models
    }
    async addCars(body){
        const d = await this.models.cars(body)
        const car = await d.save()
        return car
    }
}

module.exports = CarsServices