const mongoose = require('mongoose')

let CarSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        engine: String,
        engine_type: String,
        fuel_type: String,
        mileage: String,
        cylinders: String,
        transmission: String,
        traction: String,
        color: String,
        year: String,
        doors: String,
        windows: String,
        interior: String,
        int_color: String,
        ext_color: String,
        stock: String,
        state: String,
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Brand'
        },
        model: String,
        sub_model: String,
        feature_img: String,
        images: [
            {
                path: String
            }
        ],
        updated_date: { 
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            type: Date, 
            default: Date.now 
        },
    }
)

CarSchema.methods.update = function(author_id) {
    this.updated_date.author = author_id
    return this.save()
}

CarSchema.methods.addBrand = function (brand_id) {
    this.brand = brand_id
    return this.save()
}

CarSchema.methods.addImages = function (img) {
    this.images.push(img)
    return this.save()
}

module.exports = mongoose.model('Car', CarSchema)