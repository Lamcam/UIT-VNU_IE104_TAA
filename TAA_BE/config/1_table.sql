DROP DATABASE IF EXISTS DATABASE_IE104;

CREATE DATABASE DATABASE_IE104;

USE DATABASE_IE104;

CREATE TABLE users (
  user_id CHAR(8),
  user_name VARCHAR(255),
  user_phone VARCHAR(20),
  user_email VARCHAR(255),
  user_pass VARCHAR(255),
  user_avatar_url VARCHAR(255),
  loca_default_id CHAR(8),
  PRIMARY KEY (user_id)
);

CREATE TABLE locations (
  loca_id CHAR(8),
  loca_pers_name VARCHAR(255),
  loca_pers_phone VARCHAR(20),
  loca_address VARCHAR(255),
  loca_detail VARCHAR(255),
  user_id CHAR(8),
  PRIMARY KEY (loca_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE bankcards (
  bank_id CHAR(8),
  bank_name VARCHAR(255),
  bank_number VARCHAR(20),
  bank_pers_name VARCHAR(255),
  bank_pers_id VARCHAR(12),
  user_id CHAR(8),
  PRIMARY KEY (bank_id)
);

CREATE TABLE categorytypes (
  cate_type_id CHAR(8),
  cate_type_name VARCHAR(255),
  PRIMARY KEY (cate_type_id)
);

CREATE TABLE categories (
  cate_id CHAR(8),
  cate_name VARCHAR(255),
  cate_type_id CHAR(8),
  PRIMARY KEY (cate_id),
  FOREIGN KEY (cate_type_id) REFERENCES categorytypes(cate_type_id)
);

CREATE TABLE transportmethods (
  trans_id CHAR(8),
  trans_name VARCHAR(255),
  trans_cost DECIMAL(10, 2),
  PRIMARY KEY (trans_id)
);

CREATE TABLE products (
  prod_id CHAR(8),
  prod_name VARCHAR(255),
  prod_cost DECIMAL(10, 2),
  prod_discount DECIMAL(4, 2),
  prod_end_date_discount DATE,
  prod_num_sold INT,
  prod_num_avai INT,
  prod_num_rating INT,
  prod_star_rating INT,
  prod_description TEXT,
  cate_id CHAR(8),
  PRIMARY KEY (prod_id),
  FOREIGN KEY (cate_id) REFERENCES categories(cate_id)
);

CREATE TABLE favorproducts (
  user_id CHAR(8),
  prod_id CHAR(8),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (prod_id) REFERENCES products(prod_id)
);

CREATE TABLE cart (
  user_id CHAR(8),
  prod_id CHAR(8),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (prod_id) REFERENCES products(prod_id)
);

CREATE TABLE payingmethod (
  pay_id CHAR(8),
  pay_name VARCHAR(255),
  PRIMARY KEY (pay_id)
);

CREATE TABLE orders (
  order_id CHAR(8),
  order_datetime DATE,
  order_total_cost DECIMAL(10, 2),
  user_id CHAR(8),
  pay_id CHAR(8),
  bank_id CHAR(8),
  trans_id CHAR(8),
  loca_id CHAR(8),
  order_status INT,
  order_is_paying INT,
  PRIMARY KEY (order_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (pay_id) REFERENCES payingmethod(pay_id),
  FOREIGN KEY (bank_id) REFERENCES bankcards(bank_id),
  FOREIGN KEY (trans_id) REFERENCES transportmethods(trans_id),
  FOREIGN KEY (loca_id) REFERENCES locations(loca_id)
);
