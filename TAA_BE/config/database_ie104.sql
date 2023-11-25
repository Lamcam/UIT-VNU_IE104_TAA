-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 08:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

DROP DATABASE IF EXISTS `database_ie104`;

CREATE DATABASE IF NOT EXISTS `database_ie104` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `database_ie104`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_ie104`
--

-- --------------------------------------------------------

--
-- Table structure for table `bankcards`
--

CREATE TABLE `bankcards` (
  `bank_id` char(8) NOT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `bank_number` varchar(20) DEFAULT NULL,
  `bank_pers_name` varchar(255) DEFAULT NULL,
  `bank_pers_id` varchar(12) DEFAULT NULL,
  `user_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bankcards`
--

INSERT INTO `bankcards` (`bank_id`, `bank_name`, `bank_number`, `bank_pers_name`, `bank_pers_id`, `user_id`) VALUES
('bank0000', 'ABC', '1234567890', 'Nguyễn Văn A', '9876543210', 'user0000'),
('bank0001', 'SCB', '2345678901', 'Lê Thị Giàu Bùi', '8765432109', 'user0001'),
('bank0002', 'BIDV', '3456789012', 'Trần Quốc Tuấn', '7654321098', 'user0002'),
('bank0003', 'TPB', '4567890123', 'Phạm Nguyên Ngọc', '6543210987', 'user0003');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `user_id` char(8) DEFAULT NULL,
  `prod_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`user_id`, `prod_id`) VALUES
('user0000', 'prod0001'),
('user0000', 'prod0002'),
('user0001', 'prod0005'),
('user0001', 'prod0006'),
('user0002', 'prod0009'),
('user0002', 'prod0010'),
('user0003', 'prod0003'),
('user0003', 'prod0004');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cate_id` char(8) NOT NULL,
  `cate_name` varchar(255) DEFAULT NULL,
  `cate_type_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cate_id`, `cate_name`, `cate_type_id`) VALUES
('cate0011', 'Vong_co', 'caty0010'),
('cate0012', 'Vong_tay', 'caty0010'),
('cate0013', 'Hoa_tai', 'caty0010'),
('cate0014', 'Nhan', 'caty0010'),
('cate0021', 'Kep', 'caty0020'),
('cate0022', 'Day_cot_toc', 'caty0020'),
('cate0023', 'Cai_toc', 'caty0020'),
('cate0024', 'Tram_cai', 'caty0020'),
('cate0031', 'Balo', 'caty0030'),
('cate0032', 'Tui_xach', 'caty0030'),
('cate0033', 'Vi', 'caty0030'),
('cate0041', 'Giay', 'caty0040'),
('cate0042', 'Dep', 'caty0040'),
('cate0043', 'Tat', 'caty0040'),
('cate0051', 'Thiep', 'caty0050'),
('cate0052', 'Op_lung', 'caty0050'),
('cate0053', 'Mat_kinh', 'caty0050'),
('cate0054', 'Day_deo', 'caty0050'),
('cate0055', 'Mu_non', 'caty0050'),
('cate0056', 'Khau_trang', 'caty0050');

-- --------------------------------------------------------

--
-- Table structure for table `categorytypes`
--

CREATE TABLE `categorytypes` (
  `cate_type_id` char(8) NOT NULL,
  `cate_type_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categorytypes`
--

INSERT INTO `categorytypes` (`cate_type_id`, `cate_type_name`) VALUES
('caty0010', 'Trang_suc'),
('caty0020', 'Phu_kien_toc'),
('caty0030', 'Tui_xach'),
('caty0040', 'Giay_dep'),
('caty0050', 'Khac');

-- --------------------------------------------------------

--
-- Table structure for table `favorproducts`
--

CREATE TABLE `favorproducts` (
  `user_id` char(8) DEFAULT NULL,
  `prod_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorproducts`
--

INSERT INTO `favorproducts` (`user_id`, `prod_id`) VALUES
('user0000', 'prod0001'),
('user0000', 'prod0002'),
('user0000', 'prod0003'),
('user0000', 'prod0004'),
('user0001', 'prod0005'),
('user0001', 'prod0006'),
('user0001', 'prod0007'),
('user0001', 'prod0008'),
('user0002', 'prod0009'),
('user0002', 'prod0010'),
('user0002', 'prod0001'),
('user0002', 'prod0002'),
('user0003', 'prod0003'),
('user0003', 'prod0004'),
('user0003', 'prod0005'),
('user0003', 'prod0006');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `loca_id` char(8) NOT NULL,
  `loca_pers_name` varchar(255) DEFAULT NULL,
  `loca_pers_phone` varchar(20) DEFAULT NULL,
  `loca_address` varchar(255) DEFAULT NULL,
  `loca_detail` varchar(255) DEFAULT NULL,
  `user_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`loca_id`, `loca_pers_name`, `loca_pers_phone`, `loca_address`, `loca_detail`, `user_id`) VALUES
('loca0000', 'Nguyễn Văn A', '0123456789', 'Nhơn Trạch_Đồng Nai', 'Đối diện quán lẩu ABC', 'user0000'),
('loca0001', 'Trần Thị B', '0987654321', 'Bình Dương', 'Gần chợ ABC', 'user0001'),
('loca0002', 'Lâm Thị Hồng C', '0123252729', 'Quận 1, TP. Hồ Chí Minh', 'Gần công viên XYZ', 'user0002'),
('loca0003', 'Phạm Thị D', '0987654321', 'Đống Đa, Hà Nội', 'Gần trường DEF', 'user0003');

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `order_id` char(8) DEFAULT NULL,
  `prod_id` char(8) DEFAULT NULL,
  `quantity` char(8) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`order_id`, `prod_id`, `quantity`, `price`) VALUES
('abcd1234', 'prod0001', '1', 25000.00),
('abcd1234', 'prod0002', '1', 25000.00),
('abcd1234', 'prod0003', '1', 25000.00),
('abcd1234', 'prod0004', '1', 25000.00),
('abce1234', 'prod0009', '2', 25000.00),
('abce1234', 'prod0010', '2', 25000.00),
('annn1910', 'prod0005', '1', 25000.00),
('annn1910', 'prod0006', '1', 25000.00),
('annn1910', 'prod0007', '1', 25000.00),
('annn1910', 'prod0008', '1', 25000.00),
('asdf1111', 'prod0003', '2', 25000.00),
('asdf1111', 'prod0004', '2', 25000.00),
('camh1811', 'prod0001', '1', 25000.00),
('camh1811', 'prod0002', '1', 25000.00),
('camh1811', 'prod0003', '1', 25000.00),
('camh1811', 'prod0004', '1', 25000.00),
('daub2411', 'prod0009', '2', 25000.00),
('daub2411', 'prod0010', '2', 25000.00),
('efgh5678', 'prod0005', '1', 25000.00),
('efgh5678', 'prod0006', '1', 25000.00),
('efgh5678', 'prod0007', '1', 25000.00),
('efgh5678', 'prod0008', '1', 25000.00),
('fghj2222', 'prod0003', '2', 25000.00),
('fghj2222', 'prod0004', '3', 25000.00),
('hieu2712', 'prod0001', '1', 25000.00),
('hieu2712', 'prod0002', '1', 25000.00),
('hieu2712', 'prod0003', '1', 25000.00),
('hieu2712', 'prod0004', '1', 25000.00),
('ijkl2712', 'prod0009', '2', 25000.00),
('ijkl2712', 'prod0010', '2', 25000.00),
('mnop9876', 'prod0005', '1', 25000.00),
('mnop9876', 'prod0006', '1', 25000.00),
('mnop9876', 'prod0007', '1', 25000.00),
('mnop9876', 'prod0008', '1', 25000.00),
('qrst1234', 'prod0003', '2', 25000.00),
('qrst1234', 'prod0004', '2', 25000.00),
('stuv1234', 'prod0009', '2', 25000.00),
('stuv1234', 'prod0010', '2', 25000.00),
('vbnm1122', 'prod0005', '1', 25000.00),
('vbnm1122', 'prod0006', '1', 25000.00),
('vbnm1122', 'prod0007', '1', 25000.00),
('vbnm1122', 'prod0008', '1', 25000.00),
('vbnm1122', 'prod0009', '2', 25000.00),
('vbnm1122', 'prod0010', '2', 25000.00);

--
-- Triggers `orderdetails`
--
DELIMITER $$
CREATE TRIGGER `update_orders_total_cost` AFTER INSERT ON `orderdetails` FOR EACH ROW BEGIN
    DECLARE order_total_cost DECIMAL(10, 2);
    -- Calculate the total cost for the order
    SELECT SUM(quantity * price) INTO order_total_cost
    FROM orderdetails
    WHERE order_id = NEW.order_id;
    -- Update the total_cost for the order
    UPDATE orders
    SET order_total_cost = order_total_cost
    WHERE order_id = NEW.order_id;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_prod_num_sold` AFTER INSERT ON `orderdetails` FOR EACH ROW BEGIN
    DECLARE total_quantity INT;
    -- Calculate the total quantity of the product in the order
    SELECT SUM(quantity) INTO total_quantity
    FROM orderdetails
    WHERE prod_id = NEW.prod_id;
    -- Update the prod_num_sold for the product
    UPDATE products
    SET prod_num_sold = prod_num_sold + total_quantity
    WHERE prod_id = NEW.prod_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` char(8) NOT NULL,
  `order_datetime` date DEFAULT NULL,
  `order_total_cost` decimal(10,2) DEFAULT 0.00,
  `user_id` char(8) DEFAULT NULL,
  `pay_id` char(8) DEFAULT NULL,
  `bank_id` char(8) DEFAULT NULL,
  `trans_id` char(8) DEFAULT NULL,
  `loca_id` char(8) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_is_paying` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_datetime`, `order_total_cost`, `user_id`, `pay_id`, `bank_id`, `trans_id`, `loca_id`, `order_status`, `order_is_paying`) VALUES
('abcd1234', '2023-10-10', 100000.00, 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 0, 0),
('abce1234', '2023-10-12', 100000.00, 'user0002', 'pay00', NULL, 'tran0001', 'loca0002', 0, 0),
('annn1910', '2023-10-16', 100000.00, 'user0001', 'pay00', NULL, 'tran0001', 'loca0001', 0, 0),
('asdf1111', '2023-10-25', 100000.00, 'user0000', 'pay01', 'bank0001', 'tran0001', 'loca0000', 0, 1),
('camh1811', '2023-10-15', 100000.00, 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 1, 1),
('daub2411', '2023-10-17', 100000.00, 'user0002', 'pay01', 'bank0003', 'tran0001', 'loca0002', 0, 1),
('efgh5678', '2023-10-11', 100000.00, 'user0001', 'pay01', 'bank0001', 'tran0001', 'loca0001', 0, 1),
('fghj2222', '2023-10-23', 125000.00, 'user0003', 'pay01', 'bank0000', 'tran0001', 'loca0003', 1, 1),
('hieu2712', '2023-10-18', 100000.00, 'user0003', 'pay00', NULL, 'tran0000', 'loca0003', 0, 0),
('ijkl2712', '2023-10-13', 100000.00, 'user0003', 'pay00', NULL, 'tran0001', 'loca0003', 0, 0),
('mnop9876', '2023-10-20', 100000.00, 'user0000', 'pay00', NULL, 'tran0001', 'loca0000', 1, 1),
('qrst1234', '2023-10-21', 100000.00, 'user0001', 'pay01', NULL, 'tran0001', 'loca0001', 0, 1),
('stuv1234', '2023-10-22', 100000.00, 'user0002', 'pay00', NULL, 'tran0000', 'loca0002', 0, 0),
('vbnm1122', '2023-10-26', 200000.00, 'user0001', 'pay00', NULL, 'tran0000', 'loca0001', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `payingmethod`
--

CREATE TABLE `payingmethod` (
  `pay_id` char(8) NOT NULL,
  `pay_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payingmethod`
--

INSERT INTO `payingmethod` (`pay_id`, `pay_name`) VALUES
('pay00', 'Tiền mặt'),
('pay01', 'Ngân hàng');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

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

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`prod_id`, `prod_name`, `prod_cost`, `prod_discount`, `prod_end_date_discount`, `prod_num_sold`, `prod_num_avai`, `prod_num_rating`, `prod_star_rating`, `prod_description`, `cate_id`) VALUES
('prod0000', 'Sản phẩm 1', 100000.00, 0.25, '2023-11-01', 0, 10, 0, 0, '', 'cate0011'),
('prod0001', 'Sản phẩm 2', 200000.00, 0.20, '2023-11-01', 6, 20, 0, 5, '', 'cate0011'),
('prod0002', 'Sản phẩm 3', 200000.00, 0.25, '2023-11-10', 6, 30, 0, 5, '', 'cate0012'),
('prod0003', 'Sản phẩm 4', 200000.00, 0.25, '2023-11-10', 30, 20, 0, 5, '', 'cate0012'),
('prod0004', 'Sản phẩm 5', 200000.00, 0.25, '2023-11-10', 33, 40, 0, 5, '', 'cate0013'),
('prod0005', 'Sản phẩm 6', 200000.00, 0.25, '2023-11-10', 10, 30, 0, 5, '', 'cate0013'),
('prod0006', 'Sản phẩm 7', 200000.00, 0.25, '2023-11-10', 10, 20, 0, 5, '', 'cate0014'),
('prod0007', 'Sản phẩm 8', 200000.00, 0.25, '2023-11-10', 10, 10, 0, 5, '', 'cate0014'),
('prod0008', 'Sản phẩm 9', 200000.00, 0.25, '2023-11-10', 10, 20, 0, 5, '', 'cate0021'),
('prod0009', 'Sản phẩm 10', 200000.00, 0.25, '2023-11-10', 30, 30, 0, 5, '', 'cate0021'),
('prod0010', 'Sản phẩm 11', 200000.00, 0.25, '2023-11-10', 30, 40, 0, 5, '', 'cate0022'),
('prod0011', 'Sản phẩm 12', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0022'),
('prod0012', 'Sản phẩm 13', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0023'),
('prod0013', 'Sản phẩm 14', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0023'),
('prod0014', 'Sản phẩm 15', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0024'),
('prod0015', 'Sản phẩm 16', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0024'),
('prod0016', 'Sản phẩm 17', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0031'),
('prod0017', 'Sản phẩm 18', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0031'),
('prod0018', 'Sản phẩm 19', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0032'),
('prod0019', 'Sản phẩm 20', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0032'),
('prod0020', 'Sản phẩm 21', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0033'),
('prod0021', 'Sản phẩm 22', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0033'),
('prod0022', 'Sản phẩm 23', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0041'),
('prod0023', 'Sản phẩm 24', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0041'),
('prod0024', 'Sản phẩm 25', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0042'),
('prod0025', 'Sản phẩm 26', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0042'),
('prod0026', 'Sản phẩm 27', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0043'),
('prod0027', 'Sản phẩm 28', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0043'),
('prod0028', 'Sản phẩm 29', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0043'),
('prod0029', 'Sản phẩm 30', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0051'),
('prod0030', 'Sản phẩm 31', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0051'),
('prod0031', 'Sản phẩm 32', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0052'),
('prod0032', 'Sản phẩm 33', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0052'),
('prod0033', 'Sản phẩm 34', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0053'),
('prod0034', 'Sản phẩm 35', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0053'),
('prod0035', 'Sản phẩm 36', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0054'),
('prod0036', 'Sản phẩm 37', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0054'),
('prod0037', 'Sản phẩm 38', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0055'),
('prod0038', 'Sản phẩm 39', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0055'),
('prod0039', 'Sản phẩm 40', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0056'),
('prod0040', 'Sản phẩm 41', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0056');

-- --------------------------------------------------------

--
-- Table structure for table `productsimg`
--

CREATE TABLE `productsimg` (
  `prod_id` char(8) NOT NULL,
  `prod_img_url` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productsimg`
--

INSERT INTO `productsimg` (`prod_id`, `prod_img_url`) VALUES
('prod0000', 'vong_co_1-1.jpg'),
('prod0000', 'vong_co_1-2.jpg'),
('prod0000', 'vong_co_1-3.jpg'),
('prod0000', 'vong_co_1-4.jpg'),
('prod0000', 'vong_co_1-5.jpg'),
('prod0000', 'vong_co_1-6.jpg'),
('prod0001', 'vong_co_2-1.jpg'),
('prod0001', 'vong_co_2-2.jpg'),
('prod0001', 'vong_co_2-3.jpg'),
('prod0001', 'vong_co_2-4.jpg'),
('prod0001', 'vong_co_2-5.jpg'),
('prod0001', 'vong_co_2-6.jpg'),
('prod0002', 'vong_tay_1-1.jpg'),
('prod0002', 'vong_tay_1-2.jpg'),
('prod0002', 'vong_tay_1-3.jpg'),
('prod0002', 'vong_tay_1-4.jpg'),
('prod0002', 'vong_tay_1-5.jpg'),
('prod0002', 'vong_tay_1-6.jpg'),
('prod0003', 'vong_tay_2-1.jpg'),
('prod0003', 'vong_tay_2-2.jpg'),
('prod0003', 'vong_tay_2-3.jpg'),
('prod0003', 'vong_tay_2-4.jpg'),
('prod0003', 'vong_tay_2-5.jpg'),
('prod0003', 'vong_tay_2-6.jpg'),
('prod0004', 'nhan_1-1.jpg'),
('prod0004', 'nhan_1-2.jpg'),
('prod0004', 'nhan_1-3.jpg'),
('prod0004', 'nhan_1-4.jpg'),
('prod0004', 'nhan_1-5.jpg'),
('prod0004', 'nhan_1-6.jpg'),
('prod0005', 'nhan_2-1.jpg'),
('prod0005', 'nhan_2-2.jpg'),
('prod0005', 'nhan_2-3.jpg'),
('prod0005', 'nhan_2-4.jpg'),
('prod0005', 'nhan_2-5.jpg'),
('prod0005', 'nhan_2-6.jpg'),
('prod0006', 'hoa_tai_1-1.jpg'),
('prod0006', 'hoa_tai_1-2.jpg'),
('prod0006', 'hoa_tai_1-3.jpg'),
('prod0006', 'hoa_tai_1-4.jpg'),
('prod0006', 'hoa_tai_1-5.jpg'),
('prod0006', 'hoa_tai_1-6.jpg'),
('prod0007', 'hoa_tai_2-1.jpg'),
('prod0007', 'hoa_tai_2-2.jpg'),
('prod0007', 'hoa_tai_2-3.jpg'),
('prod0007', 'hoa_tai_2-4.jpg'),
('prod0007', 'hoa_tai_2-5.jpg'),
('prod0007', 'hoa_tai_2-6.jpg'),
('prod0008', 'kep_1-1.jpg'),
('prod0008', 'kep_1-2.jpg'),
('prod0008', 'kep_1-3.jpg'),
('prod0008', 'kep_1-4.jpg'),
('prod0008', 'kep_1-5.jpg'),
('prod0008', 'kep_1-6.jpg'),
('prod0009', 'kep_2-1.jpg'),
('prod0009', 'kep_2-2.jpg'),
('prod0009', 'kep_2-3.jpg'),
('prod0009', 'kep_2-4.jpg'),
('prod0009', 'kep_2-5.jpg'),
('prod0009', 'kep_2-6.jpg'),
('prod0010', 'day_cot_toc_1-1.jpg'),
('prod0010', 'day_cot_toc_1-2.jpg'),
('prod0010', 'day_cot_toc_1-3.jpg'),
('prod0010', 'day_cot_toc_1-4.jpg'),
('prod0010', 'day_cot_toc_1-5.jpg'),
('prod0010', 'day_cot_toc_1-6.jpg'),
('prod0011', 'day_cot_toc_2-1.jpg'),
('prod0011', 'day_cot_toc_2-2.jpg'),
('prod0011', 'day_cot_toc_2-3.jpg'),
('prod0011', 'day_cot_toc_2-4.jpg'),
('prod0011', 'day_cot_toc_2-5.jpg'),
('prod0011', 'day_cot_toc_2-6.jpg'),
('prod0012', 'cai_toc_1-1.jpg'),
('prod0012', 'cai_toc_1-2.jpg'),
('prod0012', 'cai_toc_1-3.jpg'),
('prod0012', 'cai_toc_1-4.jpg'),
('prod0012', 'cai_toc_1-5.jpg'),
('prod0012', 'cai_toc_1-6.jpg'),
('prod0013', 'cai_toc_2-1.jpg'),
('prod0013', 'cai_toc_2-2.jpg'),
('prod0013', 'cai_toc_2-3.jpg'),
('prod0013', 'cai_toc_2-4.jpg'),
('prod0013', 'cai_toc_2-5.jpg'),
('prod0013', 'cai_toc_2-6.jpg'),
('prod0014', 'tram_cai_1-1.jpg'),
('prod0014', 'tram_cai_1-2.jpg'),
('prod0014', 'tram_cai_1-3.jpg'),
('prod0014', 'tram_cai_1-4.jpg'),
('prod0014', 'tram_cai_1-5.jpg'),
('prod0014', 'tram_cai_1-6.jpg'),
('prod0015', 'tram_cai_2-1.jpg'),
('prod0015', 'tram_cai_2-2.jpg'),
('prod0015', 'tram_cai_2-3.jpg'),
('prod0015', 'tram_cai_2-4.jpg'),
('prod0015', 'tram_cai_2-5.jpg'),
('prod0015', 'tram_cai_2-6.jpg'),
('prod0016', 'balo_1-1.jpg'),
('prod0016', 'balo_1-2.jpg'),
('prod0016', 'balo_1-3.jpg'),
('prod0016', 'balo_1-4.jpg'),
('prod0016', 'balo_1-5.jpg'),
('prod0016', 'balo_1-6.jpg'),
('prod0017', 'balo_2-1.jpg'),
('prod0017', 'balo_2-2.jpg'),
('prod0017', 'balo_2-3.jpg'),
('prod0017', 'balo_2-4.jpg'),
('prod0017', 'balo_2-5.jpg'),
('prod0017', 'balo_2-6.jpg'),
('prod0018', 'tui_xach_1-1.jpg'),
('prod0018', 'tui_xach_1-2.jpg'),
('prod0018', 'tui_xach_1-3.jpg'),
('prod0018', 'tui_xach_1-4.jpg'),
('prod0018', 'tui_xach_1-5.jpg'),
('prod0018', 'tui_xach_1-6.jpg'),
('prod0019', 'tui_xach_2-1.jpg'),
('prod0019', 'tui_xach_2-2.jpg'),
('prod0019', 'tui_xach_2-3.jpg'),
('prod0019', 'tui_xach_2-4.jpg'),
('prod0019', 'tui_xach_2-5.jpg'),
('prod0019', 'tui_xach_2-6.jpg'),
('prod0020', 'vi_1-1.jpg'),
('prod0020', 'vi_1-2.jpg'),
('prod0020', 'vi_1-3.jpg'),
('prod0020', 'vi_1-4.jpg'),
('prod0020', 'vi_1-5.jpg'),
('prod0020', 'vi_1-6.jpg'),
('prod0021', 'vi_2-1.jpg'),
('prod0021', 'vi_2-2.jpg'),
('prod0021', 'vi_2-3.jpg'),
('prod0021', 'vi_2-4.jpg'),
('prod0021', 'vi_2-5.jpg'),
('prod0021', 'vi_2-6.jpg'),
('prod0022', 'giay_1-1.jpg'),
('prod0022', 'giay_1-2.jpg'),
('prod0022', 'giay_1-3.jpg'),
('prod0022', 'giay_1-4.jpg'),
('prod0022', 'giay_1-5.jpg'),
('prod0022', 'giay_1-6.jpg'),
('prod0023', 'giay_2-1.jpg'),
('prod0023', 'giay_2-2.jpg'),
('prod0023', 'giay_2-3.jpg'),
('prod0023', 'giay_2-4.jpg'),
('prod0023', 'giay_2-5.jpg'),
('prod0023', 'giay_2-6.jpg'),
('prod0024', 'dep_1-1.jpg'),
('prod0024', 'dep_1-2.jpg'),
('prod0024', 'dep_1-3.jpg'),
('prod0024', 'dep_1-4.jpg'),
('prod0024', 'dep_1-5.jpg'),
('prod0024', 'dep_1-6.jpg'),
('prod0025', 'dep_2-1.jpg'),
('prod0025', 'dep_2-2.jpg'),
('prod0025', 'dep_2-3.jpg'),
('prod0025', 'dep_2-4.jpg'),
('prod0025', 'dep_2-5.jpg'),
('prod0025', 'dep_2-6.jpg'),
('prod0026', 'tat_1-1.jpg'),
('prod0026', 'tat_1-2.jpg'),
('prod0026', 'tat_1-3.jpg'),
('prod0026', 'tat_1-4.jpg'),
('prod0026', 'tat_1-5.jpg'),
('prod0026', 'tat_1-6.jpg'),
('prod0027', 'tat_2-1.jpg'),
('prod0027', 'tat_2-2.jpg'),
('prod0027', 'tat_2-3.jpg'),
('prod0027', 'tat_2-4.jpg'),
('prod0027', 'tat_2-5.jpg'),
('prod0027', 'tat_2-6.jpg'),
('prod0028', 'thiep_1-1.jpg'),
('prod0028', 'thiep_1-2.jpg'),
('prod0028', 'thiep_1-3.jpg'),
('prod0028', 'thiep_1-4.jpg'),
('prod0028', 'thiep_1-5.jpg'),
('prod0028', 'thiep_1-6.jpg'),
('prod0029', 'thiep_2-1.jpg'),
('prod0029', 'thiep_2-2.jpg'),
('prod0029', 'thiep_2-3.jpg'),
('prod0029', 'thiep_2-4.jpg'),
('prod0029', 'thiep_2-5.jpg'),
('prod0029', 'thiep_2-6.jpg'),
('prod0030', 'op_lung_1-1.jpg'),
('prod0030', 'op_lung_1-2.jpg'),
('prod0030', 'op_lung_1-3.jpg'),
('prod0030', 'op_lung_1-4.jpg'),
('prod0030', 'op_lung_1-5.jpg'),
('prod0030', 'op_lung_1-6.jpg'),
('prod0031', 'op_lung_2-1.jpg'),
('prod0031', 'op_lung_2-2.jpg'),
('prod0031', 'op_lung_2-3.jpg'),
('prod0031', 'op_lung_2-4.jpg'),
('prod0031', 'op_lung_2-5.jpg'),
('prod0031', 'op_lung_2-6.jpg'),
('prod0032', 'mat_kinh_1-1.jpg'),
('prod0032', 'mat_kinh_1-2.jpg'),
('prod0032', 'mat_kinh_1-3.jpg'),
('prod0032', 'mat_kinh_1-4.jpg'),
('prod0032', 'mat_kinh_1-5.jpg'),
('prod0032', 'mat_kinh_1-6.jpg'),
('prod0033', 'mat_kinh_2-1.jpg'),
('prod0033', 'mat_kinh_2-2.jpg'),
('prod0033', 'mat_kinh_2-3.jpg'),
('prod0033', 'mat_kinh_2-4.jpg'),
('prod0033', 'mat_kinh_2-5.jpg'),
('prod0033', 'mat_kinh_2-6.jpg'),
('prod0034', 'day_deo_1-1.jpg'),
('prod0034', 'day_deo_1-2.jpg'),
('prod0034', 'day_deo_1-3.jpg'),
('prod0034', 'day_deo_1-4.jpg'),
('prod0034', 'day_deo_1-5.jpg'),
('prod0034', 'day_deo_1-6.jpg'),
('prod0035', 'day_deo_2-1.jpg'),
('prod0035', 'day_deo_2-2.jpg'),
('prod0035', 'day_deo_2-3.jpg'),
('prod0035', 'day_deo_2-4.jpg'),
('prod0035', 'day_deo_2-5.jpg'),
('prod0035', 'day_deo_2-6.jpg'),
('prod0036', 'mu_non_1-1.jpg'),
('prod0036', 'mu_non_1-2.jpg'),
('prod0036', 'mu_non_1-3.jpg'),
('prod0036', 'mu_non_1-4.jpg'),
('prod0036', 'mu_non_1-5.jpg'),
('prod0036', 'mu_non_1-6.jpg'),
('prod0037', 'mu_non_2-1.jpg'),
('prod0037', 'mu_non_2-2.jpg'),
('prod0037', 'mu_non_2-3.jpg'),
('prod0037', 'mu_non_2-4.jpg'),
('prod0037', 'mu_non_2-5.jpg'),
('prod0037', 'mu_non_2-6.jpg'),
('prod0038', 'khau_trang_1-1.jpg'),
('prod0038', 'khau_trang_1-2.jpg'),
('prod0038', 'khau_trang_1-3.jpg'),
('prod0038', 'khau_trang_1-4.jpg'),
('prod0038', 'khau_trang_1-5.jpg'),
('prod0038', 'khau_trang_1-6.jpg'),
('prod0039', 'khau_trang_2-1.jpg'),
('prod0039', 'khau_trang_2-2.jpg'),
('prod0039', 'khau_trang_2-3.jpg'),
('prod0039', 'khau_trang_2-4.jpg'),
('prod0039', 'khau_trang_2-5.jpg'),
('prod0039', 'khau_trang_2-6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `transportmethods`
--

CREATE TABLE `transportmethods` (
  `trans_id` char(8) NOT NULL,
  `trans_name` varchar(255) DEFAULT NULL,
  `trans_cost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transportmethods`
--

INSERT INTO `transportmethods` (`trans_id`, `trans_name`, `trans_cost`) VALUES
('tran0000', 'Van_chuyen_thuong', 0.00),
('tran0001', 'Van_chuyen_nhanh', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` char(8) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_avatar_url` varchar(255) DEFAULT NULL,
  `loca_default_id` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_phone`, `user_email`, `user_pass`, `user_avatar_url`, `loca_default_id`) VALUES
('user0000', 'Nguyễn Văn A', '0123456789', 'abc@gmail.com', 'Abcd@123', NULL, NULL),
('user0001', 'Trần Thị B', '0987654321', 'def@gmail.com', 'Defg@456', 'user_avatar_1', NULL),
('user0002', 'Lâm Thị Hồng C', '0123252729', 'ghi@gmail.com', 'Ghij@789', NULL, NULL),
('user0003', 'Phạm Thị D', '0987654321', 'jkl@gmail.com', 'Jklm@012', 'user_avatar_3', NULL),
('user0004', 'Hoàng Văn E', '0108456789', 'mno@gmail.com', 'Mnop@345', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bankcards`
--
ALTER TABLE `bankcards`
  ADD PRIMARY KEY (`bank_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
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
  ADD PRIMARY KEY (`loca_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD KEY `order_id` (`order_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `pay_id` (`pay_id`),
  ADD KEY `bank_id` (`bank_id`),
  ADD KEY `trans_id` (`trans_id`),
  ADD KEY `loca_id` (`loca_id`);

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
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Constraints for dumped tables
--

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
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `ordersdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `ordersdetails_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`);

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
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `categories` (`cate_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
