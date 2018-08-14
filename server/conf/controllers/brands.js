const Brand = require('../models/Brand');
const User = require('../models/User');

const fs = require('fs');

module.exports = {
    addBrand: (req, res, next) => {
        let { 
            name,
            description,
            feature_img,
            claps,
            author,
            cars,
            updated_date 
        } = req.body

        if (req.files.image) {
            cloudinary.uploader.upload(req.files.image.path, (result) => {
                let obj = { 
                    name,
                    description,
                    claps,
                    author,
                    cars,
                    updated_date,
                    feature_img: result.url != null ? result.url : '' 
                }
                saveBrand(obj)
            },{
                resource_type: 'image',
            })
        }else {
            saveBrand(
                {
                    name,
                    description,
                    claps,
                    author,
                    cars,
                    updated_date,
                    feature_img: '' 
                }
            )
        }

        function saveBrand(obj) {
            new Brand(obj).save((err, brand) => {
                if (err)
                    res.send(err)
                else if (!brand)
                    res.send(400)
                else {
                    return Brand.addAuthor(req.body.author_id).then((_brand) => {
                        return res.send(_brand)
                    })
                }
                next()
            })
        }
    },
    getAll: (req, res, next) => {
        Brand.find(req.params.id)
        .populate('author')
        .populate('cars.car').exec((err, brand)=> {
            if (err)
                res.send(err)
            else if (!brand)
                res.send(404)
            else
                res.send(brand)
            next()            
        })
    },
    /**
     * brand_id
    */
    clapBrand: (req, res, next) => {
        Brand.findById(req.body.brand_id).then((brand)=> {
            return Brand.clap().then(()=>{
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * comment, author_id, brand_id
    */
    addCar: (req, res, next) => {
        Brand.findById(req.body.brand_id).then((brand)=> {
            return Brand.addCar({
                author: req.body.car_id,
            }).then(() => {
                return res.json({msg: "Done"})
            })
        }).catch(next)
    },
    /**
     * brand_id
    */
    getBrand: (req, res, next) => {
        Brand.findById(req.params.id)
        .populate('author')
        .populate('cars.car').exec((err, brand)=> {
            if (err)
                res.send(err)
            else if (!brand)
                res.send(404)
            else
                res.send(brand)
            next()            
        })
    }
}