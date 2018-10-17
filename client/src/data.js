import AstonMartin from './assets/images/brands/astonmartin.jpg';
import Audi from './assets/images/brands/audi.jpg';
import BMW from './assets/images/brands/bmw.jpg';
import Ferrari from './assets/images/brands/ferrari.jpg';
import Lamborghini from './assets/images/brands/lamborghini.jpg';
import Lexus from './assets/images/brands/lexus.jpg';
import Maserati from './assets/images/brands/maserati.jpg';
import MercedesBenz from './assets/images/brands/mercedes-benz.jpg';
import Porsche from './assets/images/brands/porsche.jpg';
import RangeRover from './assets/images/brands/landrover.jpg';
import Toyota from './assets/images/brands/toyota.jpg';

import LandCruiser from './assets/images/cars/toyota/land-cruiser/1.jpg';
import LandCruiser2 from './assets/images/cars/toyota/land-cruiser/2.jpg';
import LandCruiser3 from './assets/images/cars/toyota/land-cruiser/3.jpg';
import LandCruiser4 from './assets/images/cars/toyota/land-cruiser/4.jpg';
import LandCruiser5 from './assets/images/cars/toyota/land-cruiser/5.jpg';
import LandCruiser6 from './assets/images/cars/toyota/land-cruiser/6.jpg';

import mercedesGris from './assets/images/cars/mercedes-benz/gris/1.jpg';
import mercedesGris2 from './assets/images/cars/mercedes-benz/gris/2.jpg';
import mercedesGris3 from './assets/images/cars/mercedes-benz/gris/3.jpg';
import mercedesGris4 from './assets/images/cars/mercedes-benz/gris/4.jpg';
import mercedesGris5 from './assets/images/cars/mercedes-benz/gris/5.jpg';
import mercedesGris6 from './assets/images/cars/mercedes-benz/gris/6.jpg';

import mercedesBlanca from './assets/images/cars/mercedes-benz/blanca/1.jpg';
import mercedesBlanca2 from './assets/images/cars/mercedes-benz/blanca/2.jpg';
import mercedesBlanca3 from './assets/images/cars/mercedes-benz/blanca/3.jpg';
import mercedesBlanca4 from './assets/images/cars/mercedes-benz/blanca/4.jpg';
import mercedesBlanca5 from './assets/images/cars/mercedes-benz/blanca/5.jpg';
import mercedesBlanca6 from './assets/images/cars/mercedes-benz/blanca/6.jpg';



const data = {
    // pages: [
    //     {'name':'Inicio'},
    //     {'name':'¿Quienes Somos?'},
    //     {'name':'Inventario'},
    //     {'name':'Contacto'},
    // ],
    // carousel:[
    // ],
    site: {
        'name':'Luxury Motors Panamá',
        'url':'luxurymotorspanama.com',
        'social_media': [
            {
                'red': 'instagram',
                'url': 'https://www.instagram.com/',
                'user': 'luxurymotors.panama'
            },
            {
                'red': 'facebook',
                'url': 'https://www.facebook.com/',
                'user': 'luxurymotorspanama'
            },
        ],
        'newsletter': false,
        'debug': true,
        'production': false,
        'history': 'Con mas de 20 años en el mercado de autos de lujos, somos pioneros en la ciudad de Panamá y contamos con amplia experiencia en el area.'
    },
    cars: [
        {
            'id':1,
            'brand':'Mercedes-Benz',
            'model':'GLE 43 AMG Coupe',
            'milage':'2',
            'year':'2018',
            'direction':'',
            'sub_type':'',
            'traction':'',
            'transmission':'Automática',
            'color':'Gris',
            'fuel':'',
            'engine':'',
            'price':'83.000,00',
            'slug':'',
            'description':'Hermosa GLE 43 AMG Coupe',
            'photos': [
                {
                    'low':mercedesGris,
                    'hight':mercedesGris,
                    'thumb':mercedesGris,
                    'alt':mercedesGris,
                    'position':0
                },
                {
                    'low':mercedesGris2,
                    'hight':mercedesGris2,
                    'thumb':mercedesGris2,
                    'alt':mercedesGris2,
                    'position':2
                },
                {
                    'low':mercedesGris3,
                    'hight':mercedesGris3,
                    'thumb':mercedesGris3,
                    'alt':mercedesGris3,
                    'position':3
                },
                {
                    'low':mercedesGris4,
                    'hight':mercedesGris4,
                    'thumb':mercedesGris4,
                    'alt':mercedesGris4,
                    'position':4
                },
                {
                    'low':mercedesGris5,
                    'hight':mercedesGris5,
                    'thumb':mercedesGris5,
                    'alt':mercedesGris5,
                    'position':5
                },
                {
                    'low':mercedesGris6,
                    'hight':mercedesGris6,
                    'thumb':mercedesGris6,
                    'alt':mercedesGris6,
                    'position':6
                },
            ]
        },
        {
            'id':2,
            'brand':'Toyota',
            'model':'Land Cruiser',
            'milage':'12.000 Kms.',
            'year':'2014',
            'direction':'',
            'sub_type':'Todoterreno',
            'traction':'4 x 4',
            'transmission':'',
            'color':'Blanco',
            'fuel':'Gasolina',
            'engine':'',
            'price':'41.000,00',
            'slug':'',
            'description':'Hermosa camioneta Toyota modelo Land Cruiser, todoterreno, 4x4 ...',
            'photos': [
                {
                    'low':LandCruiser,
                    'hight':LandCruiser,
                    'thumb':LandCruiser,
                    'alt':LandCruiser,
                    'position':0
                },
                {
                    'low':LandCruiser2,
                    'hight':LandCruiser2,
                    'thumb':LandCruiser2,
                    'alt':LandCruiser2,
                    'position':2
                },
                {
                    'low':LandCruiser3,
                    'hight':LandCruiser3,
                    'thumb':LandCruiser3,
                    'alt':LandCruiser3,
                    'position':3
                },
                {
                    'low':LandCruiser4,
                    'hight':LandCruiser4,
                    'thumb':LandCruiser4,
                    'alt':LandCruiser4,
                    'position':4
                },
                {
                    'low':LandCruiser5,
                    'hight':LandCruiser5,
                    'thumb':LandCruiser5,
                    'alt':LandCruiser5,
                    'position':5
                },
                {
                    'low':LandCruiser6,
                    'hight':LandCruiser6,
                    'thumb':LandCruiser6,
                    'alt':LandCruiser6,
                    'position':6
                },
            ]
        },
        {
            'id':3,
            'brand':'Mercedes-Benz',
            'model':'GLC 250 kit AMG',
            'milage':'8.000 Kms.',
            'year':'2017',
            'direction':'',
            'sub_type':'',
            'traction':'',
            'transmission':'',
            'color':'Blanca',
            'fuel':'',
            'engine':'',
            'price':'54.000,00',
            'slug':'',
            'description':'Hermosa GLC 250 kit AMG.',
            'photos': [
                {
                    'low':mercedesBlanca,
                    'hight':mercedesBlanca,
                    'thumb':mercedesBlanca,
                    'alt':mercedesBlanca,
                    'position':0
                },
                {
                    'low':mercedesBlanca2,
                    'hight':mercedesBlanca2,
                    'thumb':mercedesBlanca2,
                    'alt':mercedesBlanca2,
                    'position':2
                },
                {
                    'low':mercedesBlanca3,
                    'hight':mercedesBlanca3,
                    'thumb':mercedesBlanca3,
                    'alt':mercedesBlanca3,
                    'position':3
                },
                {
                    'low':mercedesBlanca4,
                    'hight':mercedesBlanca4,
                    'thumb':mercedesBlanca4,
                    'alt':mercedesBlanca4,
                    'position':4
                },
                {
                    'low':mercedesBlanca5,
                    'hight':mercedesBlanca5,
                    'thumb':mercedesBlanca5,
                    'alt':mercedesBlanca5,
                    'position':5
                },
                {
                    'low':mercedesBlanca6,
                    'hight':mercedesBlanca6,
                    'thumb':mercedesBlanca6,
                    'alt':mercedesBlanca6,
                    'position':6
                },
            ]
        }
    ],
    brands: [
        {
            'name': 'Audi',
            'id': 1,
            'slug':'Audi',
            'alt':'',
            'img': Audi
        },
        {
            'name': 'BMW',
            'id': 2,
            'slug':'BMW',
            'alt':'',
            'img': BMW
        },
        {
            'name': 'Ferrari',
            'id': 3,
            'slug':'Ferrari',
            'alt':'',
            'img': Ferrari
        },
        {
            'name': 'Lamborghini',
            'id': 4,
            'slug':'Lamborghini',
            'alt':'',
            'img': Lamborghini
        },
        {
            'name': 'Lexus',
            'id': 5,
            'slug':'Lexus',
            'alt':'',
            'img': Lexus
        },
        {
            'name': 'Maserati',
            'id': 6,
            'slug':'Maserati',
            'alt':'',
            'img': Maserati
        },
        {
            'name': 'Mercedes-Benz',
            'id': 7,
            'slug':'Mercedes-Benz',
            'alt':'',
            'img': MercedesBenz
        },
        {
            'name': 'Porsche',
            'id': 8,
            'slug':'Porsche',
            'alt':'',
            'img': Porsche
        },
        {
            'name': 'Range Rover',
            'id': 9,
            'slug':'Range-Rover',
            'alt':'',
            'img': RangeRover
        },
        {
            'name': 'Toyota',
            'id': 10,
            'slug':'Toyota',
            'alt':'',
            'img': Toyota
        },
        {
            'name': 'Aston Martin',
            'id': 10,
            'slug':'Aston-Martin',
            'alt':'',
            'img': AstonMartin
        }
    ],
    cars_type: [
        {
            'name': 'Audi',
            'id': 1,
            'slug':'Audi',
            'alt':'',
            'img': Audi
        },
    ],
    user: 'Guest'
}

export default data;