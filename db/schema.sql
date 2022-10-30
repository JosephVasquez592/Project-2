DROP DATABASE IF EXISTS perfect_list;
CREATE DATABASE perfect_list;

USE perfect_list;

CREATE TABLE item_list (
    id INT NOT NULL,
    item_name VARCHAR(60) NOT NULL,
    purchased BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);