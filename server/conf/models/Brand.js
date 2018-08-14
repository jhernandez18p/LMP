const mongoose = require('mongoose')

let BrandSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        cars: [
            {
                car: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Car'
                }
            }
        ],
        updated_date: { 
            by: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            type: Date, 
            default: Date.now 
        },
    }
);

BrandSchema.methods.update = function(author_id) {
    this.updated_date.author = author_id
    return this.save()
}

BrandSchema.methods.clap = function() {
    this.claps++
    return this.save()
}

BrandSchema.methods.addCar = function(c) {
    this.cars.push(c)
    return this.save()
}

BrandSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}

BrandSchema.methods.getCarsBrand = function (_id) {
    Brand.find({'car': _id}).then((Car) => {
        return Car
    })
}

module.exports = mongoose.model('Brand', BrandSchema)