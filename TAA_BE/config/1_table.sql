-- Active: 1698914213463@@127.0.0.1@3306@database_ie104
DROP DATABASE IF EXISTS `database_ie104`;

CREATE DATABASE IF NOT EXISTS `database_ie104` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `database_ie104`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE DATABASE_IE104;

CREATE TABLE `users` (
  `user_id` int AUTO_INCREMENT  NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_phone` varchar(20) UNIQUE DEFAULT NULL,
  `user_email` varchar(255) UNIQUE DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_avatar_url` varchar(255) DEFAULT NULL,
  `loca_default_id` int DEFAULT NULL,
  `bank_default_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `locations` (
  `loca_id` int AUTO_INCREMENT  NOT NULL,
  `loca_pers_name` varchar(255) DEFAULT NULL,
  `loca_pers_phone` varchar(20) DEFAULT NULL,
  `loca_address` varchar(255) DEFAULT NULL,
  `loca_detail` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`loca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `bankcards` (
  `bank_id` int AUTO_INCREMENT  NOT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `bank_number` varchar(20) DEFAULT NULL,
  `bank_pers_name` varchar(255) DEFAULT NULL,
  `bank_pers_id` varchar(12) DEFAULT NULL,
  `user_id` char(8) DEFAULT NULL,
  PRIMARY KEY (`bank_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `categorytypes` (
  `cate_type_id` char(8) NOT NULL,
  `cate_type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `categories` (
  `cate_id` char(8) NOT NULL,
  `cate_name` varchar(255) DEFAULT NULL,
  `cate_type_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `transportmethods` (
  `trans_id` char(8) NOT NULL,
  `trans_name` varchar(255) DEFAULT NULL,
  `trans_cost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `products` (
  `prod_id` char(8) NOT NULL,
  `prod_name` varchar(255) DEFAULT NULL,
  `prod_cost` decimal(10,2) DEFAULT NULL,
  `prod_discount` decimal(4,2) DEFAULT NULL,
  `prod_end_date_discount` date DEFAULT NULL,
  `prod_num_sold` int(11) DEFAULT NULL,
  `prod_num_avai` int(11) DEFAULT NULL,
  `prod_num_rating` int(11) DEFAULT NULL,
  `prod_star_rating` int(11) DEFAULT NULL,
  `prod_description` text DEFAULT NULL,
  `cate_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `favorproducts` (
  `user_id` int DEFAULT NULL,
  `prod_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `cart` (
  `user_id` int DEFAULT NULL,
  `prod_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `payingmethod` (
  `pay_id` char(8) NOT NULL,
  `pay_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `orders` (
  `order_id` int AUTO_INCREMENT  NOT NULL,
  `order_datetime` date DEFAULT NULL,
  `order_total_cost` decimal(10,2) DEFAULT 0,
  `user_id` int DEFAULT NULL,
  `pay_id` char(8) DEFAULT NULL,
  `bank_id` int DEFAULT NULL,
  `trans_id` char(8) DEFAULT NULL,
  `loca_id` int DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_is_paying` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `orderdetails` (
  `order_id` int  NOT NULL,
  `prod_id` char(8),
  `quantity` char(8),
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `productsimg` (
  `prod_id` char(8) NOT NULL,
  `prod_img_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bankcards`
--
--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`user_id`,`prod_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cate_id`),
  ADD KEY `cate_type_id` (`cate_type_id`);

--
-- Indexes for table `categorytypes`
--
ALTER TABLE `categorytypes`
  ADD PRIMARY KEY (`cate_type_id`);

--
-- Indexes for table `favorproducts`
--
ALTER TABLE `favorproducts`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `pay_id` (`pay_id`),
  ADD KEY `bank_id` (`bank_id`),
  ADD KEY `trans_id` (`trans_id`),
  ADD KEY `loca_id` (`loca_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `payingmethod`
--
ALTER TABLE `payingmethod`
  ADD PRIMARY KEY (`pay_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`prod_id`),
  ADD KEY `cate_id` (`cate_id`);

--
-- Indexes for table `productsimg`
--
ALTER TABLE `productsimg`
  ADD KEY `prod_id` (`prod_id`),
  ADD KEY `prod_img_url` (`prod_img_url`);

--
-- Indexes for table `transportmethods`
--
ALTER TABLE `transportmethods`
  ADD PRIMARY KEY (`trans_id`);

--
-- Indexes for table `users`
--

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `users`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`loca_default_id`) REFERENCES `bankcards` (`bank_id`),
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`bank_default_id`) REFERENCES `locations` (`loca_id`);

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`cate_type_id`) REFERENCES `categorytypes` (`cate_type_id`);

--
-- Constraints for table `favorproducts`
--
ALTER TABLE `favorproducts`
  ADD CONSTRAINT `favorproducts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `favorproducts_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`);

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`pay_id`) REFERENCES `payingmethod` (`pay_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`bank_id`) REFERENCES `bankcards` (`bank_id`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`trans_id`) REFERENCES `transportmethods` (`trans_id`),
  ADD CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`loca_id`) REFERENCES `locations` (`loca_id`);

--
-- Constraints for table `ordersdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `ordersdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `ordersdetails_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `categories` (`cate_id`);