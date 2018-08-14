CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    nickname TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    user_password TEXT NOT NULL,
    birthday DATE NOT NULL,
    avatar VARCHAR(255)
);

CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL,
    alt TEXT NOT NULL,
    img VARCHAR(255)
)

CREATE TABLE cars (
    id INTEGER NOT NULL,
    brands_id INTEGER REFERENCES brands(id) ON UPDATE CASCADE ON DELETE CASCADE,
    model TEXT NOT NULL,
    milage TEXT NOT NULL,
    model_year TEXT NOT NULL,
    direction TEXT NOT NULL,
    sub_type TEXT NOT NULL,
    traction TEXT NOT NULL,
    transmission TEXT NOT NULL,
    color TEXT NOT NULL,
    fuel TEXT NOT NULL,
    engine TEXT NOT NULL,
    price TEXT NOT NULL,
    slug TEXT NOT NULL,
    car_description TEXT NOT NULL,
    PRIMARY KEY (id, brands_id),
)

CREATE TABLE photos(
    id INTEGER PRIMARY KEY,
    car_id INTEGER REFERENCES cars(id) ON UPDATE CASCADE ON DELETE CASCADE,
    alt TEXT NOT NULL,
    position INTEGER,
    img VARCHAR(255),
    img_low VARCHAR(255),
    img_hight VARCHAR(255),
    img_thumb VARCHAR(255),
    photo_type TEXT NOT NULL
)

CREATE TABLE carousels(
    id INTEGER PRIMARY KEY,
    carousel_name TEXT NOT NULL,
    position_id INTEGER REFERENCES position(id) ON UPDATE CASCADE ON DELETE CASCADE
)

CREATE TABLE slides(
    id INTEGER PRIMARY KEY,
    photo_id INTEGER REFERENCES photos(id) ON UPDATE CASCADE ON DELETE CASCADE,
    carousel_id INTEGER REFERENCES carousels(id) ON UPDATE CASCADE ON DELETE CASCADE,
    youtube_url TEXT,
)