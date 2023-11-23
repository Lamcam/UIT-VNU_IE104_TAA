-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2023 at 09:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
('bank0003', 'TPB', '4567890123', 'Phạm Nguyên Ngọc', '6543210987', 'user0003'),
('bank0004', 'ACB', '5678901234', 'Bùi Xuân Nhi', '5432109876', 'user0004');

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
('user0003', 'prod0004'),
('user0004', 'prod0007'),
('user0004', 'prod0008');

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
('user0003', 'prod0006'),
('user0004', 'prod0007'),
('user0004', 'prod0008'),
('user0004', 'prod0009'),
('user0004', 'prod0010');

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
('loca0003', 'Phạm Thị D', '0987654321', 'Đống Đa, Hà Nội', 'Gần trường DEF', 'user0003'),
('loca0004', 'Hoàng Văn E', '0123456789', 'Quận 7, TP. Hồ Chí Minh', 'Gần siêu thị GHI', 'user0004');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` char(8) NOT NULL,
  `order_datetime` date DEFAULT NULL,
  `order_total_cost` decimal(10,2) DEFAULT NULL,
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
('abcd1234', '2023-10-10', 0.00, 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 0, 0),
('abce1234', '2023-10-12', 50000.00, 'user0002', 'pay00', NULL, 'tran0001', 'loca0002', 0, 0),
('annn1910', '2023-10-16', 70000.00, 'user0001', 'pay00', NULL, 'tran0001', 'loca0001', 0, 0),
('asdf1111', '2023-10-25', 90000.00, 'user0000', 'pay01', 'bank0001', 'tran0001', 'loca0000', 0, 1),
('camh1811', '2023-10-15', 45000.00, 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 1, 1),
('daub2411', '2023-10-17', 200000.00, 'user0002', 'pay01', 'bank0003', 'tran0001', 'loca0002', 0, 1),
('efgh5678', '2023-10-11', 100000.00, 'user0001', 'pay01', 'bank0001', 'tran0001', 'loca0001', 0, 1),
('fghj2222', '2023-10-23', 130000.00, 'user0003', 'pay01', 'bank0000', 'tran0001', 'loca0003', 1, 1),
('hieu2712', '2023-10-18', 30000.00, 'user0003', 'pay00', NULL, 'tran0000', 'loca0003', 0, 0),
('ijkl2712', '2023-10-13', 75000.00, 'user0003', 'pay00', NULL, 'tran0001', 'loca0003', 0, 0),
('mnop0701', '2023-10-14', 35000.00, 'user0004', 'pay01', 'bank0002', 'tran0001', 'loca0004', 0, 1),
('mnop9876', '2023-10-20', 120000.00, 'user0000', 'pay00', NULL, 'tran0001', 'loca0000', 1, 1),
('nadc1302', '2023-10-19', 60000.00, 'user0004', 'pay00', NULL, 'tran0001', 'loca0004', 0, 0),
('qrst1234', '2023-10-21', 150000.00, 'user0001', 'pay01', 'bank0004', 'tran0001', 'loca0001', 0, 1),
('stuv1234', '2023-10-22', 125000.00, 'user0002', 'pay00', NULL, 'tran0000', 'loca0002', 0, 0),
('tyui1234', '2023-10-24', 140000.00, 'user0004', 'pay00', NULL, 'tran0000', 'loca0004', 0, 0),
('vbnm1122', '2023-10-26', 500000.00, 'user0001', 'pay00', NULL, 'tran0000', 'loca0001', 0, 0);

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
('prod0001', 'Sản phẩm 2', 200000.00, 0.20, '2023-11-01', 0, 20, 0, 5, '', 'cate0011'),
('prod0002', 'Sản phẩm 3', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0012'),
('prod0003', 'Sản phẩm 4', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0033'),
('prod0004', 'Sản phẩm 5', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0024'),
('prod0005', 'Sản phẩm 6', 200000.00, 0.50, '2023-11-20', 0, 50, 0, 5, '', 'cate0021'),
('prod0006', 'Sản phẩm 7', 200000.00, 0.50, '2023-11-20', 0, 70, 0, 5, '', 'cate0032'),
('prod0007', 'Sản phẩm 8', 200000.00, 0.50, '2023-11-20', 0, 60, 0, 5, '', 'cate0031'),
('prod0008', 'Sản phẩm 9', 200000.00, 0.70, '2023-11-05', 0, 50, 0, 5, '', 'cate0043'),
('prod0009', 'Sản phẩm 10', 200000.00, 0.10, '2023-11-05', 0, 30, 0, 5, '', 'cate0056'),
('prod0010', 'Sản phẩm 11', 200000.00, 0.10, '2023-11-07', 0, 10, 0, 5, '', 'cate0051'),
('prod0011', 'Sản phẩm 12', 200000.00, 0.10, '2023-11-07', 0, 20, 0, 5, '', 'cate0041');

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
