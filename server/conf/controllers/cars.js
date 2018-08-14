const Car = require('./../models/Car')

module.exports = {
    addCar: (req, res, next) => {
        new Car(req.body).save((err, newCar) => {
            if (err)
                res.send(err)
            else if (!newCar)
                res.send(400)
            else
                res.send(newCar)
            next()
        });
    },
    getCar: (req, res, next) => {
        Car.findById(req.params.id).then
        ((err, car)=> {
            if (err)
                res.send(err)
            else if (!car)
                res.send(404)
            else
                res.send(car)
            next()            
        })
    },
    getAllCars: (req, res, next) => {
        Car.find(req.params.id).then
        ((err, car)=> {
            if (err)
                res.send(err)
            else if (!car)
                res.send(404)
            else
                res.send(car)
            next()            
        })
    },
}