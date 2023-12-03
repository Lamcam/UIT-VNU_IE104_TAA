-- Active: 1700979201863@@127.0.0.1@3306@database_ie104
USE DATABASE_IE104;

DROP TRIGGER IF EXISTS update_prod_num_sold_avai;

DELIMITER //
CREATE TRIGGER update_prod_num_sold_avai AFTER INSERT ON orderdetails
FOR EACH ROW
BEGIN
    UPDATE products
    SET prod_num_sold = prod_num_sold + NEW.quantity,
        prod_num_avai = prod_num_avai - NEW.quantity
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