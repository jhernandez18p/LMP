const carController = require('./../controllers/cars')

module.exports = (router) => {

    /**
     * get a car
     */
    router
        .route('/car/:id')
        .get(carController.getCar)

    /**
     * get all cars
     */
    router
        .route('/cars')
        .get(carController.getAllCars)

    /**
     * adds a car
     */
    router
        .route('/car')
        .post(carController.addCar)

}