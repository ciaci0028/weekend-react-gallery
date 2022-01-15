CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(500) NOT NULL,
    "description" VARCHAR(160) NOT NULL,
    "likes" INTEGER
);

INSERT INTO "gallery"
	("path", "description", "likes")
VALUES
	(
        'images/crochet_project.jpg', 
        'Photo of one of my crochet projects.', 
        0,
    ),
	(
        'images/mom_and_ruhi.jpg', 
        'Photo of my mother and puppy',
        0,
    ),
	(
        'images/mom_and_sabrina.jpg', 
        'Photo of my mother and I',
        0,
    ),
	(
        'images/ruhi_and_ashley.jpg', 
        'My best friend, Ashley!',
        0,
    ),
    (
        'images/rugby.jpg', 
        'I love my puppy!',
        0,
    ),
	(
        'images/rugby.jpg',
        'I also love playing rugby!',
        0,
    );