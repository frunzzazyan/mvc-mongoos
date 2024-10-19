class ProductsControllers {
    async addProduct(req,res){
        try {       
            const products = await req.app.locals.services.products.addProduct(req.body)
            res.json(products)
        } catch (error) {
            res.json("error add products")
         }
    }
}

module.exports = ProductsControllers