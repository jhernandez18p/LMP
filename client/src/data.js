import Audi from './assets/images/brands/audi.jpg';
import BMW from './assets/images/brands/bmw.jpg';
import Ferrari from './assets/images/brands/ferrari.jpg';
import Lamborghini from './assets/images/brands/lamborghini.jpg';
import Lexus from './assets/images/brands/lexus.jpg';
import Maserati from './assets/images/brands/maserati.jpg';
import MercedesBenz from './assets/images/brands/mercedes-benz.jpg';
import Porsche from './assets/images/brands/porsche.jpg';

[
    {
        'brands': {
            1: {
                name: 'Audi',
                id: '1',
                file: Audi
            },
            2: {
                name: 'BMW',
                id: '2',
                file: BMW
            },
            3: {
                name: 'Ferrari',
                id: '3',
                file: Ferrari
            },
            4: {
                name: 'Lamborghini',
                id: 4,
                file: Lamborghini
            },
            5: {
                name: 'Lexuz',
                id: 5,
                file: Lexus
            },
            6: {
                name: 'Maserati',
                id: 6,
                file: Maserati
            },
            7: {
                name: 'Mercedes-Benz',
                id: 7,
                file: MercedesBenz
            },
            8: {
                name: 'Porsche',
                id: 8,
                file: Porsche
            },
        }
    },
    {
        "data": [{
            "type": "articles",
            "id": "1",
            "attributes": {
                "title": "JSON API paints my bikeshed!"
            },
            "links": {
                "self": "http://example.com/articles/1"
            },
            "relationships": {
                "author": {
                    "links": {
                        "self": "http://example.com/articles/1/relationships/author",
                        "related": "http://example.com/articles/1/author"
                    },
                    "data": { "type": "people", "id": "9" }
                },
                "comments": {
                    "links": {
                        "self": "http://example.com/articles/1/relationships/comments",
                        "related": "http://example.com/articles/1/comments"
                    },
                    "data": [
                        { "type": "comments", "id": "5" },
                        { "type": "comments", "id": "12" }
                    ]
                }
            }
        }],
            "included": [{
                "type": "people",
                "id": "9",
                "attributes": {
                    "first-name": "Dan",
                    "last-name": "Gebhardt",
                    "twitter": "dgeb"
                },
                "links": {
                    "self": "http://example.com/people/9"
                }
            }, {
                "type": "comments",
                "id": "5",
                "attributes": {
                    "body": "First!"
                },
                "relationships": {
                    "author": {
                        "data": { "type": "people", "id": "2" }
                    }
                },
                "links": {
                    "self": "http://example.com/comments/5"
                }
            }, {
                "type": "comments",
                "id": "12",
                "attributes": {
                    "body": "I like XML better"
                },
                "relationships": {
                    "author": {
                        "data": { "type": "people", "id": "9" }
                    }
                },
                "links": {
                    "self": "http://example.com/comments/12"
                }
            }
        ]
    }
]
