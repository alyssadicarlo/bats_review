INSERT INTO users
    (first_name, last_name, email, password)
VALUES
    ('Alyssa', 'DiCarlo', 'alyssa.dicarlo@gmail.com', 'password123');

INSERT INTO bats
    (bat_name, bat_brand, slug, image_url)
VALUES
    ('LXT', 'Louisville Slugger', 'louisville_slugger_lxt', './images/louisville_slugger_lxt.jpeg');


INSERT INTO reviews
    (bat_score, bat_review, bat_id, user_id)
VALUES
    (5, 'AWESOME bat! Great pop.', 1, 1);