const user = require('./user');
const brand = require('./brand');
const car = require('./car');

module.exports = (router) => {
    car(router)
    user(router)
    brand(router)
}