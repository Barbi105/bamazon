DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (  
	item_id INT NOT NULL AUTO_INCREMENT,
 	product_name VARCHAR(50) NOT NULL,
 	department_name VARCHAR(50) NOT NULL,
 	price DECIMAL (10,2) NOT NULL,
 	stock_quantity INTEGER(10) NOT NULL,
 	PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 1000.05, 30),
("Chair", "Furniture", 60.99, 50),
("Earring", "Jewelry", 115.20, 15),
("Shirt", "Clothing", 25.03, 100),
("Speaker", "Electronics", 150.10, 25),
("Lamp", "Furniture", 30.60, 200),
("Skirt", "Clothing", 40.15, 80),
("Necklace", "Jewelry", 200.90, 20),
("Television", "Electronics", 650.99, 60),
("Desk", "Furniture", 130.70, 35),
("Ring", "Jewelry", 500.40, 10),
("Sweater", "Clothing", 55.40, 40);