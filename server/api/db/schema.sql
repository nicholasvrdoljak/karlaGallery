DROP DATABASE IF EXISTS karlaGallery;

CREATE DATABASE karlaGallery;

USE karlaGallery;

CREATE TABLE users (
  `id` INT AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `username_idx` (`username`)
);