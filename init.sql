DROP DATABASE IF EXISTS e_shop_db;

CREATE DATABASE e_shop_db;
USE e_shop_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL,
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
    `name` varchar(50),
    price DECIMAL NOT NULL,
    upd_date DATE,
    `description` TEXT,
    `image` varchar(255),
    amount INT NOT NULL,
    mark DECIMAL DEFAULT 0,
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

CREATE TABLE delete_requests (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    `status` varchar(20),
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO roles (name) VALUES ("user"), ("admin");
INSERT INTO users (email, password, first_name, last_name) VALUES ("testemail1@gmail.com", "test1", "TestFName1", "TestLName1"), ("sssnnn@gmail.com", "test", "Vasya", "Voin"),  ("testemail2@gmail.com", "test2", "TestFName2", "TestLName2"),  ("testemail3@gmail.com", "test3", "TestFName3", "TestLName3"), ("testemail4@gmail.com", "test4", "TestFName4", "TestLName4"), ("testemail5@gmail.com", "test5", "TestFName5", "TestLName5"), ("testemail6@gmail.com", "test6", "TestFName6", "TestLName6"),("testemail7@gmail.com", "test7", "TestFName7", "TestLName7"), ("testemail8@gmail.com", "test8", "TestFName8", "TestLName8");
 
INSERT INTO users_roles (user_id, role_id) VALUES (1, 1);
INSERT INTO products (name, price, description, image, amount) VALUES 
("Bpple iPhone 1", 300,  "Latest iPhone version. Apple.", "no_url", 1),
("Apple iPhone 2", 300,  "Latest iPhone version. Apple.", "no_url", 4),
("Rpple iPhone 3", 300,  "Latest iPhone version. Apple.", "no_url", 13),
("Apple iPhone 4", 300,  "Latest iPhone version. Apple.", "no_url", 0),
("Kpple iPhone 5", 300,  "Latest iPhone version. Apple.", "no_url", 4),
("Ypple iPhone 6", 300,  "Latest iPhone version. Apple.", "no_url", 24),
("Jpple iPhone 7", 300, "Latest iPhone version. Apple.", "no_url", 4),
("Ppple iPhone 8", 300, "Latest iPhone version. Apple.", "no_url", 0),
("Vpple iPhone 9", 300, "Latest iPhone version. Apple.", "no_url", 7),
("Mpple iPhone 10", 300, "Latest iPhone version. Apple.", "no_url", 0),
("Qpple iPhone 11", 300, "Latest iPhone version. Apple.", "no_url", 2);
INSERT INTO marks (user_id, product_id, value) VALUES (1, 1, 5);


