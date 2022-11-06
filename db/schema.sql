DROP DATABASE IF EXISTS perfect_list;
CREATE DATABASE perfect_list;
USE perfect_list;
CREATE TABLE item_list (
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR(60) NOT NULL,
    purchased BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE user_info (
    email VARCHAR (60) NOT NULL,
    username VARCHAR (8) NOT NULL,
    password VARCHAR(14) NOT NULL
);