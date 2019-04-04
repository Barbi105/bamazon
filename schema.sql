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
VALUES ("Laptop", "Electronics", 1000.00, 30),
("Chair", "Furniture", 60.00, 50),
("Earring", "Jewelry", 115.00, 15),
("Shirt", "Clothing", 25.00, 100),
("Speaker", "Electronics", 150.00, 25),
("Lamp", "Furniture", 30.00, 200),
("Skirt", "Clothing", 40.00, 80),
("Necklace", "Jewelry", 200.00, 20),
("Television", "Electronics", 650.00, 60),
("Desk", "Furniture", 130.00, 35),
("Ring", "Jewelry", 500.00, 10),
("Sweater", "Clothing", 55.00, 40);