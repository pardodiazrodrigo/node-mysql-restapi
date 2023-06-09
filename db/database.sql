CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
    );

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'Joe', 2000),
    (2, 'Maria', 3000),
    (3, 'Jose', 4000),
    (4, 'Pilar', 1500),
    (5, 'Mia', 2500);

DELETE FROM employee WHERE id = 2;
