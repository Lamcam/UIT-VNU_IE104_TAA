USE DATABASE_IE104;

INSERT INTO `users` (`user_id`, `user_name`, `user_phone`, `user_email`, `user_pass`, `user_avatar_url`, `loca_default_id`) VALUES
('user0000', 'Nguyễn Văn A', '0123456789', 'abc@gmail.com', 'Abcd@123', NULL, NULL),
('user0001', 'Trần Thị B', '0987654321', 'def@gmail.com', 'Defg@456', 'user_avatar_1', NULL),
('user0002', 'Lâm Thị Hồng C', '0123252729', 'ghi@gmail.com', 'Ghij@789', NULL, NULL),
('user0003', 'Phạm Thị D', '0987654321', 'jkl@gmail.com', 'Jklm@012', 'user_avatar_3', NULL),
('user0004', 'Hoàng Văn E', '0108456789', 'mno@gmail.com', 'Mnop@345', NULL, NULL);


INSERT INTO `locations` (`loca_id`, `loca_pers_name`, `loca_pers_phone`, `loca_address`, `loca_detail`, `user_id`) VALUES
('loca0000', 'Nguyễn Văn A', '0123456789', 'Nhơn Trạch_Đồng Nai', 'Đối diện quán lẩu ABC', 'user0000'),
('loca0001', 'Trần Thị B', '0987654321', 'Bình Dương', 'Gần chợ ABC', 'user0001'),
('loca0002', 'Lâm Thị Hồng C', '0123252729', 'Quận 1, TP. Hồ Chí Minh', 'Gần công viên XYZ', 'user0002'),
('loca0003', 'Phạm Thị D', '0987654321', 'Đống Đa, Hà Nội', 'Gần trường DEF', 'user0003');

INSERT INTO `bankcards` (`bank_id`, `bank_name`, `bank_number`, `bank_pers_name`, `bank_pers_id`, `user_id`) VALUES
('bank0000', 'ABC', '1234567890', 'Nguyễn Văn A', '9876543210', 'user0000'),
('bank0001', 'SCB', '2345678901', 'Lê Thị Giàu Bùi', '8765432109', 'user0001'),
('bank0002', 'BIDV', '3456789012', 'Trần Quốc Tuấn', '7654321098', 'user0002'),
('bank0003', 'TPB', '4567890123', 'Phạm Nguyên Ngọc', '6543210987', 'user0003');

INSERT INTO `categorytypes` (`cate_type_id`, `cate_type_name`) VALUES
('caty0010', 'Trang_suc'),
('caty0020', 'Phu_kien_toc'),
('caty0030', 'Tui_xach'),
('caty0040', 'Giay_dep'),
('caty0050', 'Khac');

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

INSERT INTO transportmethods (trans_id, trans_name, trans_cost)
VALUES
  ('tran0000', 'Van_chuyen_thuong', 0),
  ('tran0001', 'Van_chuyen_nhanh', 0);

INSERT INTO `products` (`prod_id`, `prod_name`, `prod_cost`, `prod_discount`, `prod_end_date_discount`, `prod_num_sold`, `prod_num_avai`, `prod_num_rating`, `prod_star_rating`, `prod_description`, `cate_id`) VALUES
('prod0001', 'Vòng cổ choker đính ngọc trai sành điệu', 100000.00, 0.25, '2023-11-01', 0, 10, 0, 0, '', 'cate0011'),
('prod0002', 'Vòng cổ mặt cười', 200000.00, 0.20, '2023-11-01', 0, 20, 0, 5, '', 'cate0011'),
('prod0003', 'Vòng tay thời tiết - mây và cầu vồng', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0012'),
('prod0004', 'Vòng tay ngôi sao may mắn', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0012'),
('prod0005', 'Bông tai mèo và cá đáng yêu', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0013'),
('prod0006', 'Bông tai mèo đen tinh nghịch', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0013'),
('prod0007', 'Cặp nhẫn dễ thương cho cặp đôi', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0014'),
('prod0008', 'Nhẫn Shin cậu bé bút chì', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0014'),
('prod0009', 'Kẹp tóc đính đá sang chảnh', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0021'),
('prod0010', 'Kẹp tóc bông hoa', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0021'),
('prod0011', 'Dây cột Tóc Newave', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0022'),
('prod0012', 'Dây  cột tóc PARFOIS ', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0022'),
('prod0013', 'Cài tóc gấu dâu xinh xắn', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0023'),
('prod0014', 'Combo Băng Đô Cài Tóc', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0023'),
('prod0015', 'Combo 2 trâm cài nhật nguyệt', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0024'),
('prod0016', 'Trâm Cài Tóc Hình Hoa Lily ', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0024'),
('prod0017', 'Ba Lô Nữ Dice', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0031'),
('prod0018', 'Balo START', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0031'),
('prod0019', 'Túi Đeo Vai Nữ-Amelia Shoulder Bag ', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0032'),
('prod0020', 'Túi KARL ', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0032'),
('prod0021', 'Ví KARL LAGERFELD ', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0033'),
('prod0022', 'Ví Dạng Hộp Volcano ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0033'),
('prod0023', 'Thiệp Giáng Sinh, Sinh Nhật ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0051'),
('prod0024', 'Thiệp TOGU', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0051'),
('prod0025', 'Ốp điện thoại dẻo cho iphone 15', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0052'),
('prod0026', 'Ốp lưng gấu dâu ', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0052'),
('prod0027', 'Kính Mát Gọng Mắt Mèo Lexa Ink', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0053'),
('prod0028', 'Kính mát SUNSHINE', 200000.00, 0.25, '2023-11-10', 0, 60, 0, 5, '', 'cate0053'),
('prod0029', 'Dây đeo gấu dâu siêu cute', 200000.00, 0.25, '2023-11-10', 0, 70, 0, 5, '', 'cate0054'),
('prod0030', 'Dây đeo thẻ', 200000.00, 0.25, '2023-11-10', 0, 10, 0, 5, '', 'cate0054'),
('prod0031', 'Nón KARL LAGERFELD ', 200000.00, 0.25, '2023-11-10', 0, 20, 0, 5, '', 'cate0055'),
('prod0032', 'Nón nữ sticker cô gái đeo kính', 200000.00, 0.25, '2023-11-10', 0, 30, 0, 5, '', 'cate0055'),
('prod0033', 'Khẩu trang 5D ', 200000.00, 0.25, '2023-11-10', 0, 40, 0, 5, '', 'cate0056'),
('prod0034', 'Khẩu Trang Teelab', 200000.00, 0.25, '2023-11-10', 0, 50, 0, 5, '', 'cate0056');

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

INSERT INTO `cart` (`user_id`, `prod_id`) VALUES
('user0000', 'prod0001'),
('user0000', 'prod0002'),
('user0001', 'prod0005'),
('user0001', 'prod0006'),
('user0002', 'prod0009'),
('user0002', 'prod0010'),
('user0003', 'prod0003'),
('user0003', 'prod0004');


INSERT INTO `payingmethod` (`pay_id`, `pay_name`) VALUES
('pay00', 'Tiền mặt'),
('pay01', 'Ngân hàng');

INSERT INTO `orders` (`order_id`, `order_datetime`, `user_id`, `pay_id`, `bank_id`, `trans_id`, `loca_id`, `order_status`, `order_is_paying`) VALUES
('abcd1234', '2023-10-10', 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 0, 0),
('abce1234', '2023-10-12', 'user0002', 'pay00', NULL, 'tran0001', 'loca0002', 0, 0),
('annn1910', '2023-10-16', 'user0001', 'pay00', NULL, 'tran0001', 'loca0001', 0, 0),
('asdf1111', '2023-10-25', 'user0000', 'pay01', 'bank0001', 'tran0001', 'loca0000', 0, 1),
('camh1811', '2023-10-15', 'user0000', 'pay00', NULL, 'tran0000', 'loca0000', 1, 1),
('daub2411', '2023-10-17', 'user0002', 'pay01', 'bank0003', 'tran0001', 'loca0002', 0, 1),
('efgh5678', '2023-10-11', 'user0001', 'pay01', 'bank0001', 'tran0001', 'loca0001', 0, 1),
('fghj2222', '2023-10-23', 'user0003', 'pay01', 'bank0000', 'tran0001', 'loca0003', 1, 1),
('hieu2712', '2023-10-18', 'user0003', 'pay00', NULL, 'tran0000', 'loca0003', 0, 0),
('ijkl2712', '2023-10-13', 'user0003', 'pay00', NULL, 'tran0001', 'loca0003', 0, 0),
('mnop9876', '2023-10-20', 'user0000', 'pay00', NULL, 'tran0001', 'loca0000', 1, 1),
('qrst1234', '2023-10-21', 'user0001', 'pay01', NULL, 'tran0001', 'loca0001', 0, 1),
('stuv1234', '2023-10-22', 'user0002', 'pay00', NULL, 'tran0000', 'loca0002', 0, 0),
('vbnm1122', '2023-10-26', 'user0001', 'pay00', NULL, 'tran0000', 'loca0001', 0, 0);

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
('prod0010', 'kep_2-4.webp'),
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
('prod0023', 'thiep_1-2.jfif'),
('prod0023', 'thiep_1-3.jfif'),
('prod0023', 'thiep_1-4.jfif'),
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
('prod0030', 'day_deo_2-1.jfif'),
('prod0030', 'day_deo_2-2.jfif'),
('prod0030', 'day_deo_2-3.jfif'),
('prod0030', 'day_deo_2-4.jfif'),
('prod0030', 'day_deo_2-5.jfif'),
('prod0030', 'day_deo_2-6.jfif'),
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

INSERT INTO `orderdetails` (`order_id`, `prod_id`, `price`, `quantity`) VALUES
('abcd1234', 'prod0001', 25000.00, 1),
('abcd1234', 'prod0002', 25000.00, 1),
('abcd1234', 'prod0003', 25000.00, 1),
('abcd1234', 'prod0004', 25000.00, 1),
('abce1234', 'prod0009', 25000.00, 2),
('abce1234', 'prod0010', 25000.00, 2),
('annn1910', 'prod0005', 25000.00, 1),
('annn1910', 'prod0006', 25000.00, 1),
('annn1910', 'prod0007', 25000.00, 1),
('annn1910', 'prod0008', 25000.00, 1),
('asdf1111', 'prod0003', 25000.00, 2),
('asdf1111', 'prod0004', 25000.00, 2),
('camh1811', 'prod0001', 25000.00, 1),
('camh1811', 'prod0002', 25000.00, 1),
('camh1811', 'prod0003', 25000.00, 1),
('camh1811', 'prod0004', 25000.00, 1),
('daub2411', 'prod0009', 25000.00, 2),
('daub2411', 'prod0010', 25000.00, 2),
('efgh5678', 'prod0005', 25000.00, 1),
('efgh5678', 'prod0006', 25000.00, 1),
('efgh5678', 'prod0007', 25000.00, 1),
('efgh5678', 'prod0008', 25000.00, 1),
('fghj2222', 'prod0003', 25000.00, 2),
('fghj2222', 'prod0004', 25000.00, 3),
('hieu2712', 'prod0001', 25000.00, 1),
('hieu2712', 'prod0002', 25000.00, 1),
('hieu2712', 'prod0003', 25000.00, 1),
('hieu2712', 'prod0004', 25000.00, 1),
('ijkl2712', 'prod0009', 25000.00, 2),
('ijkl2712', 'prod0010', 25000.00, 2),
('mnop9876', 'prod0005', 25000.00, 1),
('mnop9876', 'prod0006', 25000.00, 1),
('mnop9876', 'prod0007', 25000.00, 1),
('mnop9876', 'prod0008', 25000.00, 1),
('qrst1234', 'prod0003', 25000.00, 2),
('qrst1234', 'prod0004', 25000.00, 2),
('stuv1234', 'prod0009', 25000.00, 2),
('stuv1234', 'prod0010', 25000.00, 2),
('vbnm1122', 'prod0005', 25000.00, 1),
('vbnm1122', 'prod0006', 25000.00, 1),
('vbnm1122', 'prod0007', 25000.00, 1),
('vbnm1122', 'prod0008', 25000.00, 1),
('vbnm1122', 'prod0009', 25000.00, 2),
('vbnm1122', 'prod0010', 25000.00, 2);