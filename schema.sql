DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (  
	item_id INT NOT NULL AUTO_INCREMENT,
 	product_name VARCHAR(50) NOT NULL,
 	department_name VARCHAR(50) NOT NULL,
 	price INTEGER (10) NOT NULL,
 	stock_quantity INTEGER(10) NOT NULL,
 	PRIMARY KEY (id)
);

SELECT * FROM products;