CREATE TABLE article (
    article_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

INSERT INTO article (title, content, user_id) VALUES 
('Lorem Ipsum 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 1', 'Duis aute irure dolor in reprehenderit.', 2),
('Consectetur Adipiscing 1', 'Excepteur sint occaecat cupidatat non proi .', 3),
('Elit Sed Do 1', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 1', 'Ut enim ad minim veniam, quis nostrud eoris nisi.', 5),
('Lorem Ipsum 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 2', 'Duis aute irure dolor in reprehen fugiat nulla pariatur.', 2),
('Consectetur Adipiscing 2', 'Excepteur sint occaecat cupidatat nonicia st laborum.', 3),
('Elit Sed Do 2', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 2', 'Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo consequat.', 5),
('Lorem Ipsum 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 3', 'Duis aute irure dolor in reprehenderit in  nulla pariatur.', 2),
('Consectetur Adipiscing 3', 'Excepteur sint occaecat ca qui officia deserunt mollit anim id est laborum.', 3),
('Elit Sed Do 3', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 3', 'Ut enim ad minim veniam, quis nostrud ut aliquip ex ea commodo consequat.', 5),
('Lorem Ipsum 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 4', 'Duis aute irure dolor in reprehenderit in  fugiat nulla pariatur.', 2),
('Consectetur Adipiscing 4', 'Excepteur sint occaecat c qui officia deserunt mollit anim id est laborum.', 3),
('Elit Sed Do 4', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 4', 'Ut enim ad minim veniam, quis nisi ut aliquip ex ea commodo consequat.', 5),
('Lorem Ipsum 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 5', 'Duis aute irure dolor in  dolore eu fugiat nulla pariatur.', 2),
('Consectetur Adipiscing 5', 'Excepteur sint  culpa qui officia deserunt mollit anim id est laborum.', 3),
('Elit Sed Do 5', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 5', 'Ut enim ad minim veniam, q laboris nisi ut aliquip ex ea commodo consequat.', 5),
('Lorem Ipsum 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 1),
('Dolor Sit Amet 6', 'Duis aute irure dolor in esse cillum dolore eu fugiat nulla pariatur.', 2),
('Consectetur Adipiscing 6', 'Excepteur sint, sunt in culpa qui officia deserunt mollit anim id est laborum.', 3),
('Elit Sed Do 6', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 4),
('Tempor Incididunt 6', 'Ut enim ad minim veniam,  nisi ut aliquip ex ea commodo consequat.', 5);


-- 1. Write an SQL statement to select all articles with their author’s email.
SELECT a.title, a.content, u.email FROM article AS a 
INNER JOIN user AS u ON a.user_id = u.id
-- 2. Write another SQL statement to select articles from 7th to 12th sorted by id.
SELECT * FROM article WHERE article_id IN (7, 8, 9, 10, 11, 12) ORDER BY article_id
