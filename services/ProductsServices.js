class ProductsServices{
    constructor(models){
        this.models = models
    }
    async addProduct(body){
        const c = await this.models.products(body)
        const product = await c.save()
        return product
    }
}

module.exports = ProductsServices