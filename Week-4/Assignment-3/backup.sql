CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO user (email, password)
VALUES('testing1234', 'passwordtesting');