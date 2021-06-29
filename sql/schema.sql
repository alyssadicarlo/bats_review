CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name text,
    last_name text,
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE bats (
    id serial PRIMARY KEY,
    bat_name text,
    bat_brand text,
    slug text,
    image_url text
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    bat_score integer,
    bat_review text,
    bat_id integer REFERENCES bats(id),
    user_id integer REFERENCES users(id)
);