DROP DATABASE IF EXISTS e_shop_db;

CREATE DATABASE e_shop_db;
USE e_shop_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL UNIQUE,
    `password` varchar(30) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users_roles (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles (id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    price DECIMAL NOT NULL,
    upd_date DATE NOT NULL,
    `description` TEXT,
    `image` varchar(255),
    amount INT NOT NULL,
    mark INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE marks (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    `value` INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE deletion_requests (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    `status` varchar(20),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO roles (name) VALUES ("user"), ("admin");
INSERT INTO users (email, password, first_name, last_name) VALUES ("sssnnn@gmail.com", "test", "Vasya", "Voin");
INSERT INTO users_roles (user_id, role_id) VALUES (1, 1);
INSERT INTO products (name, price, upd_date, description, image, amount, mark) VALUES ("Apple iPhone 7", 300, "2019-11-20", "Latest iPhone version. Apple.", "no_url", 4, 5);
INSERT INTO marks (user_id, product_id, value) VALUES (1, 1, 5);
