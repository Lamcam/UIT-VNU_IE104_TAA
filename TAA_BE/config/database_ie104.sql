-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 09:59 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
  `bank_id` int(11) NOT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `bank_number` varchar(20) DEFAULT NULL,
  `bank_pers_name` varchar(255) DEFAULT NULL,
  `bank_pers_id` varchar(12) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bankcards`
--

INSERT INTO `bankcards` (`bank_id`, `bank_name`, `bank_number`, `bank_pers_name`, `bank_pers_id`, `user_id`) VALUES
(1, 'ABC', '1234567890', 'Nguyễn Văn A', '9876543210', 1),
(2, 'SCB', '2345678901', 'Lê Thị Giàu Bùi', '8765432109', 2),
(3, 'BIDV', '3456789012', 'Trần Quốc Tuấn', '7654321098', 3),
(4, 'TPB', '4567890123', 'Phạm Nguyên Ngọc', '6543210987', 4);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `user_id` int(11) NOT NULL,
  `prod_id` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`user_id`, `prod_id`) VALUES
(1, 'prod0001'),
(1, 'prod0002'),
(2, 'prod0005'),
(2, 'prod0006'),
(3, 'prod0009'),
(3, 'prod0010'),
(4, 'prod0003'),
(4, 'prod0004');

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
  `user_id` int(11) NOT NULL,
  `prod_id` char(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorproducts`
--

INSERT INTO `favorproducts` (`user_id`, `prod_id`) VALUES
(1, 'prod0001'),
(1, 'prod0002'),
(1, 'prod0003'),
(1, 'prod0004'),
(2, 'prod0005'),
(2, 'prod0006'),
(2, 'prod0007'),
(2, 'prod0008'),
(3, 'prod0001'),
(3, 'prod0002'),
(3, 'prod0009'),
(3, 'prod0010'),
(4, 'prod0003'),
(4, 'prod0004'),
(4, 'prod0005'),
(4, 'prod0006');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `loca_id` int(11) NOT NULL,
  `loca_pers_name` varchar(255) DEFAULT NULL,
  `loca_pers_phone` varchar(20) DEFAULT NULL,
  `loca_address` varchar(255) DEFAULT NULL,
  `loca_detail` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`loca_id`, `loca_pers_name`, `loca_pers_phone`, `loca_address`, `loca_detail`, `user_id`) VALUES
(1, 'Nguyễn Văn A', '0123456789', 'Nhơn Trạch_Đồng Nai', 'Đối diện quán lẩu ABC', 1),
(2, 'Trần Thị B', '0987654321', 'Bình Dương', 'Gần chợ ABC', 2),
(3, 'Lâm Thị Hồng C', '0123252729', 'Quận 1, TP. Hồ Chí Minh', 'Gần công viên XYZ', 3),
(4, 'Phạm Thị D', '0987465321', 'Đống Đa, Hà Nội', 'Gần trường DEF', 4);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `order_id` int(11) NOT NULL,
  `prod_id` char(8) DEFAULT NULL,
  `quantity` char(8) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`order_id`, `prod_id`, `quantity`, `price`) VALUES
(1, 'prod0001', '1', 25000.00),
(1, 'prod0002', '1', 25000.00),
(1, 'prod0003', '1', 25000.00),
(1, 'prod0004', '1', 25000.00),
(2, 'prod0009', '2', 25000.00),
(2, 'prod0010', '2', 25000.00),
(3, 'prod0005', '1', 25000.00),
(3, 'prod0006', '1', 25000.00),
(3, 'prod0007', '1', 25000.00),
(3, 'prod0008', '1', 25000.00),
(4, 'prod0003', '2', 25000.00),
(4, 'prod0004', '2', 25000.00),
(5, 'prod0001', '1', 25000.00),
(5, 'prod0002', '1', 25000.00),
(5, 'prod0003', '1', 25000.00),
(5, 'prod0004', '1', 25000.00),
(6, 'prod0009', '2', 25000.00),
(6, 'prod0010', '2', 25000.00),
(7, 'prod0005', '1', 25000.00),
(7, 'prod0006', '1', 25000.00),
(7, 'prod0007', '1', 25000.00),
(7, 'prod0008', '1', 25000.00),
(8, 'prod0003', '2', 25000.00),
(8, 'prod0004', '3', 25000.00),
(9, 'prod0001', '1', 25000.00),
(9, 'prod0002', '1', 25000.00),
(9, 'prod0003', '1', 25000.00),
(9, 'prod0004', '1', 25000.00),
(10, 'prod0009', '2', 25000.00),
(10, 'prod0010', '2', 25000.00),
(11, 'prod0005', '1', 25000.00),
(11, 'prod0006', '1', 25000.00),
(11, 'prod0007', '1', 25000.00),
(11, 'prod0008', '1', 25000.00),
(12, 'prod0003', '2', 25000.00),
(12, 'prod0004', '2', 25000.00),
(13, 'prod0009', '2', 25000.00),
(13, 'prod0010', '2', 25000.00),
(14, 'prod0005', '1', 25000.00),
(14, 'prod0006', '1', 25000.00),
(14, 'prod0007', '1', 25000.00),
(14, 'prod0008', '1', 25000.00),
(14, 'prod0009', '2', 25000.00),
(14, 'prod0010', '2', 25000.00);

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
CREATE TRIGGER `update_prod_num_sold_avai` AFTER INSERT ON `orderdetails` FOR EACH ROW BEGIN
    UPDATE products
    SET prod_num_sold = prod_num_sold + NEW.quantity,
        prod_num_avai = prod_num_avai - NEW.quantity
    WHERE prod_id = NEW.prod_id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_datetime` date DEFAULT NULL,
  `order_total_cost` decimal(10,2) DEFAULT 0.00,
  `user_id` int(11) DEFAULT NULL,
  `pay_id` char(8) DEFAULT NULL,
  `bank_id` int(11) DEFAULT NULL,
  `tran_id` char(8) DEFAULT NULL,
  `loca_id` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT NULL,
  `order_is_paying` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_datetime`, `order_total_cost`, `user_id`, `pay_id`, `bank_id`, `tran_id`, `loca_id`, `order_status`, `order_is_paying`) VALUES
(1, '2023-10-10', 100000.00, 1, 'pay00', NULL, 'tran0000', 1, 0, 0),
(2, '2023-10-12', 100000.00, 3, 'pay00', NULL, 'tran0001', 3, 0, 0),
(3, '2023-10-16', 100000.00, 2, 'pay00', NULL, 'tran0001', 2, 0, 0),
(4, '2023-10-25', 100000.00, 1, 'pay01', 2, 'tran0001', 1, 0, 1),
(5, '2023-10-15', 100000.00, 1, 'pay00', NULL, 'tran0000', 1, 1, 1),
(6, '2023-10-17', 100000.00, 3, 'pay01', 4, 'tran0001', 3, 0, 1),
(7, '2023-10-11', 100000.00, 2, 'pay01', 2, 'tran0001', 2, 0, 1),
(8, '2023-10-23', 125000.00, 4, 'pay01', 1, 'tran0001', 4, 1, 1),
(9, '2023-10-18', 100000.00, 4, 'pay00', NULL, 'tran0000', 4, 0, 0),
(10, '2023-10-13', 100000.00, 4, 'pay00', NULL, 'tran0001', 4, 0, 0),
(11, '2023-10-20', 100000.00, 1, 'pay00', NULL, 'tran0001', 1, 1, 1),
(12, '2023-10-21', 100000.00, 2, 'pay01', NULL, 'tran0001', 2, 0, 1),
(13, '2023-10-22', 100000.00, 3, 'pay00', NULL, 'tran0000', 3, 0, 0),
(14, '2023-10-26', 200000.00, 2, 'pay00', NULL, 'tran0000', 2, 0, 0);

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
('prod0001', 'Vòng cổ choker đính ngọc trai sành điệu', 100000.00, 0.25, '2023-11-01', 9, 7, 2, 0, '', 'cate0011'),
('prod0002', 'Vòng cổ mặt cười nhiều màu dễ thương', 200000.00, 0.20, '2023-11-01', 9, 17, 2, 5, '', 'cate0011'),
('prod0003', 'Vòng tay thời tiết - mây và cầu vồng', 200000.00, 0.25, '2023-11-10', 39, 21, 0, 5, '', 'cate0012'),
('prod0004', 'Vòng tay ngôi sao may mắn', 200000.00, 0.25, '2023-11-10', 43, 10, 0, 5, '', 'cate0012'),
('prod0005', 'Hoa tai mèo và cá đáng yêu', 200000.00, 0.25, '2023-11-10', 14, 36, 0, 5, '', 'cate0013'),
('prod0006', 'Hoa tai mèo đen tinh nghịch', 200000.00, 0.25, '2023-11-10', 14, 26, 0, 5, '', 'cate0013'),
('prod0007', 'Nhẫn cặp dễ thương dành cho cặp đôi', 200000.00, 0.25, '2023-11-10', 14, 16, 0, 5, '', 'cate0014'),
('prod0008', 'Nhẫn Shin cậu bé bút chì', 200000.00, 0.25, '2023-11-10', 14, 6, 0, 5, '', 'cate0014'),
('prod0009', 'Kẹp tóc đính đá sang chảnh', 200000.00, 0.25, '2023-11-10', 40, 10, 0, 5, '', 'cate0021'),
('prod0010', 'Kẹp tóc bông hoa', 200000.00, 0.25, '2023-11-10', 40, 20, 0, 5, '', 'cate0021'),
('prod0011', 'Dây cột Tóc Newave', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0022'),
('prod0012', 'Dây  cột tóc PARFOIS ', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0022'),
('prod0013', 'Cài tóc gấu dâu xinh xắn', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0023'),
('prod0014', 'Combo Băng Đô Cài Tóc', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0023'),
('prod0015', 'Bộ 2 trâm cài nhật nguyệt', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0024'),
('prod0016', 'Trâm Cài Tóc Hình Hoa Lily ', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0024'),
('prod0017', 'Ba Lô Nữ Dice', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0031'),
('prod0018', 'Balo START', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0031'),
('prod0019', 'Túi Đeo Vai Nữ', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0032'),
('prod0020', 'Túi KARL ', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0032'),
('prod0021', 'Ví KARL LAGERFELD ', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0033'),
('prod0022', 'Ví Dạng Hộp Volcano ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0033'),
('prod0023', 'Thiệp Giáng Sinh, Sinh Nhật ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0051'),
('prod0024', 'Thiệp TOGU', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0051'),
('prod0025', 'Ốp điện thoại dẻo iphone 15', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0052'),
('prod0026', 'Ốp lưng gấu dâu ', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0052'),
('prod0027', 'Kính Mát Gọng Mắt Mèo', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0053'),
('prod0028', 'Kính mát SUNSHINE', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0053'),
('prod0029', 'Dây đeo gấu dâu siêu cute', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0054'),
('prod0030', 'Dây đeo thẻ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0054'),
('prod0031', 'Nón KARL LAGERFELD ', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0055'),
('prod0032', 'Nón sticker cô gái đeo kính', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0055'),
('prod0033', 'Khẩu trang 5D ', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0056'),
('prod0034', 'Khẩu Trang Teelab', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0056');

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
('prod0001', 'vong_co_1-1.jfif'),
('prod0001', 'vong_co_1-2.jfif'),
('prod0001', 'vong_co_1-3.jfif'),
('prod0001', 'vong_co_1-4.jfif'),
('prod0001', 'vong_co_1-5.jfif'),
('prod0001', 'vong_co_1-6.jfif'),
('prod0002', 'vong_co_2-1.jfif'),
('prod0002', 'vong_co_2-2.jfif'),
('prod0002', 'vong_co_2-3.jfif'),
('prod0002', 'vong_co_2-4.jfif'),
('prod0002', 'vong_co_2-5.jfif'),
('prod0002', 'vong_co_2-6.jfif'),
('prod0003', 'vong_tay_1-1.jfif'),
('prod0003', 'vong_tay_1-2.jfif'),
('prod0003', 'vong_tay_1-3.jfif'),
('prod0003', 'vong_tay_1-4.jfif'),
('prod0003', 'vong_tay_1-5.jfif'),
('prod0003', 'vong_tay_1-6.jfif'),
('prod0004', 'vong_tay_2-1.jfif'),
('prod0004', 'vong_tay_2-2.jfif'),
('prod0004', 'vong_tay_2-3.jfif'),
('prod0004', 'vong_tay_2-4.jfif'),
('prod0004', 'vong_tay_2-5.jfif'),
('prod0004', 'vong_tay_2-6.jfif'),
('prod0005', 'hoa_tai_1-1.jfif'),
('prod0005', 'hoa_tai_1-2.jfif'),
('prod0005', 'hoa_tai_1-3.jfif'),
('prod0005', 'hoa_tai_1-4.jfif'),
('prod0005', 'hoa_tai_1-5.jfif'),
('prod0005', 'hoa_tai_1-6.jfif'),
('prod0006', 'hoa_tai_2-1.jfif'),
('prod0006', 'hoa_tai_2-2.jfif'),
('prod0006', 'hoa_tai_2-3.jfif'),
('prod0006', 'hoa_tai_2-4.jfif'),
('prod0006', 'hoa_tai_2-5.jfif'),
('prod0006', 'hoa_tai_2-6.jfif'),
('prod0007', 'nhan_1-1.jfif'),
('prod0007', 'nhan_1-2.jfif'),
('prod0007', 'nhan_1-3.jfif'),
('prod0007', 'nhan_1-4.jfif'),
('prod0007', 'nhan_1-5.jfif'),
('prod0007', 'nhan_1-6.jfif'),
('prod0008', 'nhan_2-1.jfif'),
('prod0008', 'nhan_2-2.jfif'),
('prod0008', 'nhan_2-3.jfif'),
('prod0008', 'nhan_2-4.jfif'),
('prod0008', 'nhan_2-5.jfif'),
('prod0008', 'nhan_2-6.jfif'),
('prod0009', 'kep_1-1.jpeg'),
('prod0009', 'kep_1-2.jpeg'),
('prod0009', 'kep_1-3.jpeg'),
('prod0009', 'kep_1-4.jpeg'),
('prod0009', 'kep_1-5.jpeg'),
('prod0009', 'kep_1-6.jpeg'),
('prod0010', 'kep_2-1.webp'),
('prod0010', 'kep_2-2.webp'),
('prod0010', 'kep_2-3.webp'),
('prod0010', 'kep_2-4.jpg'),
('prod0010', 'kep_2-5.webp'),
('prod0010', 'kep_2-6.webp'),
('prod0011', 'day_cot_toc_1-1.webp'),
('prod0011', 'day_cot_toc_1-2.webp'),
('prod0011', 'day_cot_toc_1-3.webp'),
('prod0011', 'day_cot_toc_1-4.webp'),
('prod0011', 'day_cot_toc_1-5.webp'),
('prod0011', 'day_cot_toc_1-6.webp'),
('prod0012', 'day_cot_toc_2-1.webp'),
('prod0012', 'day_cot_toc_2-2.webp'),
('prod0012', 'day_cot_toc_2-3.webp'),
('prod0012', 'day_cot_toc_2-4.webp'),
('prod0012', 'day_cot_toc_2-5.webp'),
('prod0012', 'day_cot_toc_2-6.webp'),
('prod0013', 'cai_toc_1-1.jfif'),
('prod0013', 'cai_toc_1-2.jfif'),
('prod0013', 'cai_toc_1-3.jfif'),
('prod0013', 'cai_toc_1-4.jfif'),
('prod0013', 'cai_toc_1-5.jfif'),
('prod0013', 'cai_toc_1-6.jfif'),
('prod0014', 'cai_toc_2-1.jfif'),
('prod0014', 'cai_toc_2-2.jfif'),
('prod0014', 'cai_toc_2-3.jfif'),
('prod0014', 'cai_toc_2-4.jfif'),
('prod0014', 'cai_toc_2-5.jfif'),
('prod0014', 'cai_toc_2-6.jfif'),
('prod0015', 'tram_cai_1-1.jfif'),
('prod0015', 'tram_cai_1-2.jfif'),
('prod0015', 'tram_cai_1-3.jfif'),
('prod0015', 'tram_cai_1-4.jfif'),
('prod0015', 'tram_cai_1-5.jfif'),
('prod0015', 'tram_cai_1-6.jfif'),
('prod0016', 'tram_cai_2-1.jfif'),
('prod0016', 'tram_cai_2-2.jfif'),
('prod0016', 'tram_cai_2-3.jfif'),
('prod0016', 'tram_cai_2-4.jfif'),
('prod0016', 'tram_cai_2-5.jfif'),
('prod0016', 'tram_cai_2-6.jfif'),
('prod0017', 'balo_1-1.webp'),
('prod0017', 'balo_1-2.webp'),
('prod0017', 'balo_1-3.webp'),
('prod0017', 'balo_1-4.webp'),
('prod0017', 'balo_1-5.webp'),
('prod0017', 'balo_1-6.webp'),
('prod0018', 'balo_2-1.webp'),
('prod0018', 'balo_2-2.webp'),
('prod0018', 'balo_2-3.webp'),
('prod0018', 'balo_2-4.webp'),
('prod0018', 'balo_2-5.webp'),
('prod0018', 'balo_2-6.webp'),
('prod0019', 'tui_xach_1-1.webp'),
('prod0019', 'tui_xach_1-2.webp'),
('prod0019', 'tui_xach_1-3.webp'),
('prod0019', 'tui_xach_1-4.webp'),
('prod0019', 'tui_xach_1-5.webp'),
('prod0019', 'tui_xach_1-6.webp'),
('prod0020', 'tui_xach_2-1.webp'),
('prod0020', 'tui_xach_2-2.webp'),
('prod0020', 'tui_xach_2-3.webp'),
('prod0020', 'tui_xach_2-4.webp'),
('prod0020', 'tui_xach_2-5.webp'),
('prod0020', 'tui_xach_2-6.webp'),
('prod0021', 'vi_1-1.webp'),
('prod0021', 'vi_1-2.webp'),
('prod0021', 'vi_1-3.webp'),
('prod0021', 'vi_1-4.webp'),
('prod0021', 'vi_1-5.webp'),
('prod0021', 'vi_1-6.webp'),
('prod0022', 'vi_2-1.webp'),
('prod0022', 'vi_2-2.webp'),
('prod0022', 'vi_2-3.webp'),
('prod0022', 'vi_2-4.webp'),
('prod0022', 'vi_2-5.webp'),
('prod0022', 'vi_2-6.webp'),
('prod0023', 'thiep_1-1.jfif'),
('prod0023', 'thiep_1-2.webp'),
('prod0023', 'thiep_1-3.jfif'),
('prod0023', 'thiep_1-4.webp'),
('prod0023', 'thiep_1-5.jfif'),
('prod0023', 'thiep_1-6.jfif'),
('prod0024', 'thiep_2-1.jfif'),
('prod0024', 'thiep_2-2.jfif'),
('prod0024', 'thiep_2-3.jfif'),
('prod0024', 'thiep_2-4.jfif'),
('prod0024', 'thiep_2-5.jfif'),
('prod0024', 'thiep_2-6.jfif'),
('prod0025', 'op_lung_1-1.jfif'),
('prod0025', 'op_lung_1-2.jfif'),
('prod0025', 'op_lung_1-3.jfif'),
('prod0025', 'op_lung_1-4.jfif'),
('prod0025', 'op_lung_1-5.jfif'),
('prod0025', 'op_lung_1-6.jfif'),
('prod0026', 'op_lung_2-1.webp'),
('prod0026', 'op_lung_2-2.webp'),
('prod0026', 'op_lung_2-3.webp'),
('prod0026', 'op_lung_2-4.webp'),
('prod0026', 'op_lung_2-5.webp'),
('prod0026', 'op_lung_2-6.webp'),
('prod0027', 'mat_kinh_1-1.webp'),
('prod0027', 'mat_kinh_1-2.webp'),
('prod0027', 'mat_kinh_1-3.webp'),
('prod0027', 'mat_kinh_1-4.webp'),
('prod0027', 'mat_kinh_1-5.webp'),
('prod0027', 'mat_kinh_1-6.webp'),
('prod0028', 'mat_kinh_2-1.webp'),
('prod0028', 'mat_kinh_2-2.webp'),
('prod0028', 'mat_kinh_2-3.webp'),
('prod0028', 'mat_kinh_2-4.webp'),
('prod0028', 'mat_kinh_2-5.webp'),
('prod0028', 'mat_kinh_2-6.webp'),
('prod0029', 'day_deo_1-1.jfif'),
('prod0029', 'day_deo_1-2.jfif'),
('prod0029', 'day_deo_1-3.jfif'),
('prod0029', 'day_deo_1-4.jfif'),
('prod0029', 'day_deo_1-5.jfif'),
('prod0029', 'day_deo_1-6.jfif'),
('prod0030', 'day_deo_2-1.webp'),
('prod0030', 'day_deo_2-2.webp'),
('prod0030', 'day_deo_2-3.webp'),
('prod0030', 'day_deo_2-4.webp'),
('prod0030', 'day_deo_2-5.webp'),
('prod0030', 'day_deo_2-6.webp'),
('prod0031', 'mu_non_1-1.webp'),
('prod0031', 'mu_non_1-2.webp'),
('prod0031', 'mu_non_1-3.webp'),
('prod0031', 'mu_non_1-4.webp'),
('prod0031', 'mu_non_1-5.webp'),
('prod0031', 'mu_non_1-6.webp'),
('prod0032', 'mu_non_2-1.webp'),
('prod0032', 'mu_non_2-2.webp'),
('prod0032', 'mu_non_2-3.webp'),
('prod0032', 'mu_non_2-4.webp'),
('prod0032', 'mu_non_2-5.webp'),
('prod0032', 'mu_non_2-6.webp'),
('prod0033', 'khau_trang_1-1.jfif'),
('prod0033', 'khau_trang_1-2.jfif'),
('prod0033', 'khau_trang_1-3.jfif'),
('prod0033', 'khau_trang_1-4.jfif'),
('prod0033', 'khau_trang_1-5.jfif'),
('prod0033', 'khau_trang_1-6.jfif'),
('prod0034', 'khau_trang_2-1.jfif'),
('prod0034', 'khau_trang_2-2.jfif'),
('prod0034', 'khau_trang_2-3.jfif'),
('prod0034', 'khau_trang_2-4.jfif'),
('prod0034', 'khau_trang_2-5.jfif'),
('prod0034', 'khau_trang_2-6.jfif');

-- --------------------------------------------------------

--
-- Table structure for table `transportmethods`
--

CREATE TABLE `transportmethods` (
  `tran_id` char(8) NOT NULL,
  `tran_name` varchar(255) DEFAULT NULL,
  `tran_cost` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transportmethods`
--

INSERT INTO `transportmethods` (`tran_id`, `tran_name`, `tran_cost`) VALUES
('tran0000', 'Van_chuyen_thuong', 0.00),
('tran0001', 'Van_chuyen_nhanh', 0.00);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_pass` varchar(255) DEFAULT NULL,
  `user_avatar_url` varchar(255) DEFAULT NULL,
  `loca_default_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_phone`, `user_email`, `user_pass`, `user_avatar_url`, `loca_default_id`) VALUES
(1, 'Nguyễn Văn A', '0123456789', 'abc@gmail.com', '$2b$10$g6ZsLsSWqE8W0E.1YIdOiuud/.vF7hygz0a/i5l6j/pWKcBuDPE/G', NULL, 1),
(2, 'Trần Thị B', '0987654321', 'def@gmail.com', '$2b$10$2.96sD2qFKHBZTccAWFtv.3ENJGohrWXcgUmkzgI2fS5fUct5aD1G', 'user_avatar_1', 2),
(3, 'Lâm Thị Hồng C', '0123252729', 'ghi@gmail.com', '$2b$10$rAcQS5rb1uRClggK7jK.WOqtrqyJhOde7dqG3rGMmI3vydhmA1ue2', NULL, 3),
(4, 'Phạm Thị D', '0987465321', 'jkl@gmail.com', '$2b$10$PKjUHyEV4dlEWERROXi4TOmbnfHXf4xbaeCpTOgAXSC6SjDnlQLk6', 'user_avatar_3', 4),
(5, 'Hoàng Văn E', '0108456789', 'mno@gmail.com', '$2b$10$SB5Yi3.gKCxjVv8lkgK6UeRPzrqk28GshBxBqxEW0THgO8gZBHQni', NULL, NULL);

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
  ADD PRIMARY KEY (`user_id`,`prod_id`),
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
  ADD KEY `tran_id` (`tran_id`),
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
  ADD PRIMARY KEY (`tran_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_phone` (`user_phone`),
  ADD UNIQUE KEY `user_email` (`user_email`),
  ADD KEY `user_ibfk_1` (`loca_default_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bankcards`
--
ALTER TABLE `bankcards`
  MODIFY `bank_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `loca_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`tran_id`) REFERENCES `transportmethods` (`tran_id`),
  ADD CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`loca_id`) REFERENCES `locations` (`loca_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cate_id`) REFERENCES `categories` (`cate_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`loca_default_id`) REFERENCES `locations` (`loca_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
