CREATE DATABASE assignment;
USE assignment;

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO user (email, password)
VALUES
        ('jeremy@gmail.com', 'user1234'),
        ('jason@gmail.com', 'user1234'),
        ('meggy@gmail.com', 'user1234'),
        ('amy@gmail.com', 'user1234'),
        ('admin@gmail.com', 'admin1234');