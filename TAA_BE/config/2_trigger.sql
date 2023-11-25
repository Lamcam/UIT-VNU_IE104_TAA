-- Active: 1698914213463@@127.0.0.1@3306@database_ie104
USE DATABASE_IE104;

DROP TRIGGER IF EXISTS update_prod_num_sold;

DELIMITER //
CREATE TRIGGER update_prod_num_sold AFTER INSERT ON orderdetails
FOR EACH ROW
BEGIN
    DECLARE total_quantity INT;

    -- Calculate the total quantity of the product in the order
    SELECT SUM(quantity) INTO total_quantity
    FROM orderdetails
    WHERE prod_id = NEW.prod_id;

    -- Update the prod_num_sold for the product
    UPDATE products
    SET prod_num_sold = prod_num_sold + total_quantity
    WHERE prod_id = NEW.prod_id;
END;

DELIMITER ;

DROP TRIGGER IF EXISTS update_orders_total_cost;

DELIMITER //

CREATE TRIGGER update_orders_total_cost
AFTER INSERT ON orderdetails
FOR EACH ROW
BEGIN
    DECLARE order_total_cost DECIMAL(10, 2);

    -- Calculate the total cost for the order
    SELECT SUM(quantity * price) INTO order_total_cost
    FROM orderdetails
    WHERE order_id = NEW.order_id;

    -- Update the total_cost for the order
    UPDATE orders
    SET order_total_cost = order_total_cost
    WHERE order_id = NEW.order_id;
END;


DELIMITER ;