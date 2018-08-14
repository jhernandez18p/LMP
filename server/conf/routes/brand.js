const brandController = require('../controllers/brands')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
     * get all articles
     */
    router
    .route('/brands')
    .get(brandController.getAll)

    /**
     * get a particlular brand to view
     */
    router
        .route('/brand/:id')
        .get(brandController.getBrand)

    /**
     * add a brand
     */
    router
        .route('/brand')
        .post(multipartWare, brandController.addBrand)

    /**
     * clap on a brand
     */
    router
        .route('/brand/clap')
        .post(brandController.clapBrand)

    /**
     * add car on a brand
     */
    router
        .route('/brand/car')
        .post(brandController.addCar)
}