USE DATABASE_IE104;

INSERT INTO users (user_id, user_name, user_phone, user_email, user_pass, user_avatar_url, loca_default_id)
VALUES
  ('user0000', 'Nguyễn Văn A', '0123456789', 'abc@gmail.com', 'Abcd@123', NULL, NULL),
  ('user0001', 'Trần Thị B', '0987654321', 'def@gmail.com', 'Defg@456', 'user_avatar_1', NULL),
  ('user0002', 'Lâm Thị Hồng C', '0123252729', 'ghi@gmail.com', 'Ghij@789', NULL, NULL),
  ('user0003', 'Phạm Thị D', '0987654321', 'jkl@gmail.com', 'Jklm@012', 'user_avatar_3', NULL),
  ('user0004', 'Hoàng Văn E', '0108456789', 'mno@gmail.com', 'Mnop@345', NULL, NULL);
  -- ('user0005', 'Vũ Thị F', '0987654311', 'pqr@gmail.com', 'Pqrs@678', NULL, NULL),
  -- ('user0006', 'Bùi Yến G', '0124567789', 'stu@gmail.com', 'Stuv@901', 'user_avatar_6', NULL),
  -- ('user0007', 'Lê Thị H', '0988854321', 'vwx@gmail.com', 'Vwxy@234', NULL, NULL),
  -- ('user0008', 'Nguyễn Văn I', '0152345789', 'yza@gmail.com', 'Yzab@567', NULL, NULL),
  -- ('user0009', 'Trần Thị J', '0947654321', 'bcd@gmail.com', 'Bcde@890', 'user_avatar_9', NULL),
  -- ('user0010', 'Bùi Xuân N', '0987654521', 'bcd@gmail.com', 'Bcde@890', 'user_avatar_10', NULL);


INSERT INTO locations (loca_id, loca_pers_name, loca_pers_phone, loca_address, loca_detail, user_id)
VALUES
  ('loca0000', 'Nguyễn Văn A', '0123456789', 'Nhơn Trạch_Đồng Nai', 'Đối diện quán lẩu ABC', 'user0000'),
  ('loca0001', 'Trần Thị B', '0987654321', 'Bình Dương', 'Gần chợ ABC', 'user0001'),
  ('loca0002', 'Lâm Thị Hồng C', '0123252729', 'Quận 1, TP. Hồ Chí Minh', 'Gần công viên XYZ', 'user0002'),
  ('loca0003', 'Phạm Thị D', '0987654321', 'Đống Đa, Hà Nội', 'Gần trường DEF', 'user0003'),
  ('loca0004', 'Hoàng Văn E', '0123456789', 'Quận 7, TP. Hồ Chí Minh', 'Gần siêu thị GHI', 'user0004');
  -- ('loca0005', 'Vũ Thị F', '0987654311', 'Hải Châu, Đà Nẵng', 'Gần bãi biển JKL', 'user0005'),
  -- ('loca0006', 'Bùi Yến G', '0124567789', 'Hoàn Kiếm, Hà Nội', 'Gần hồ KLM', 'user0006'),
  -- ('loca0007', 'Lê Thị H', '0987654321', 'Sơn Trà, Đà Nẵng', 'Gần núi NOP', 'user0007'),
  -- ('loca0008', 'Nguyễn Văn I', '0123456789', 'Gò Vấp, TP. Hồ Chí Minh', 'Gần công viên QRS', 'user0008'),
  -- ('loca0009', 'Trần Thị J', '0947654321', 'Hai Bà Trưng, Hà Nội', 'Gần chợ TUV', 'user0009'),
  -- ('loca0010', 'Bùi Xuân N', '0987654321', 'Núi Bà Đen, Tây Ninh', 'Gần chợ Trảng Bàng', 'user0010');

INSERT INTO bankcards (bank_id, bank_name, bank_number, bank_pers_name, bank_pers_id, user_id)
VALUES
  ('bank0000', 'ABC', '1234567890', 'Nguyễn Văn A', '9876543210', 'user0000'),
  ('bank0001', 'SCB', '2345678901', 'Lê Thị Giàu Bùi', '8765432109', 'user0001'),
  ('bank0002', 'BIDV', '3456789012', 'Trần Quốc Tuấn', '7654321098', 'user0002'),
  ('bank0003', 'TPB', '4567890123', 'Phạm Nguyên Ngọc', '6543210987', 'user0003'),
  ('bank0004', 'ACB', '5678901234', 'Bùi Xuân Nhi', '5432109876', 'user0004');
  -- ('bank0005', 'AGB', '6789012345', 'Đỗ Thành Đạt', '4321098765'),
  -- ('bank0006', 'STB', '7890123456', 'Nguyễn Gia Hân', '3210987654'),
  -- ('bank0007', 'SGB', '8901234567', 'Lê Thị Hân', '2109876543'),
  -- ('bank0008', 'VTB', '9012345678', 'Lê Đức Hạnh', '1098765432'),
  -- ('bank0009', 'ACB', '1234567890', 'Nguyễn Văn Cừ', '9876543210'),
  -- ('bank0010', 'BAC', '2345678901', 'Lê Thị Riêng', '8765432109');

INSERT INTO categorytypes (cate_type_id, cate_type_name)
VALUES
  ('caty0010', 'Trang_suc'),
  ('caty0020', 'Phu_kien_toc'),
  ('caty0030', 'Tui_xach'),
  ('caty0040', 'Giay_dep'),
  ('caty0050', 'Khac');

INSERT INTO categories (cate_id, cate_name, cate_type_id)
VALUES
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

INSERT INTO products (prod_id, prod_name, prod_cost, prod_discount, prod_end_date_discount, prod_num_sold, prod_num_avai, prod_num_rating, prod_star_rating, prod_description, cate_id)
VALUES
  ('prod0000',  'Sản phẩm 1', 100000, 0.25, '2023/11/01', 0, 10, 0, 0, '', 'cate0011'),
  ('prod0001',  'Sản phẩm 2', 200000, 0.20, '2023/11/01', 0, 20, 0, 5, '', 'cate0011'),
  ('prod0002',  'Sản phẩm 3', 200000, 0.25, '2023/11/10', 0, 30, 0, 5, '', 'cate0012'),
  ('prod0003',  'Sản phẩm 4', 200000, 0.25, '2023/11/10', 0, 20, 0, 5, '', 'cate0033'),
  ('prod0004',  'Sản phẩm 5', 200000, 0.25, '2023/11/10', 0, 40, 0, 5, '', 'cate0024'),
  ('prod0005',  'Sản phẩm 6', 200000, 0.50, '2023/11/20', 0, 50, 0, 5, '', 'cate0021'),
  ('prod0006',  'Sản phẩm 7', 200000, 0.50, '2023/11/20', 0, 70, 0, 5, '', 'cate0032'),
  ('prod0007',  'Sản phẩm 8', 200000, 0.50, '2023/11/20', 0, 60, 0, 5, '', 'cate0031'),
  ('prod0008',  'Sản phẩm 9', 200000, 0.70, '2023/11/05', 0, 50, 0, 5, '', 'cate0043'),
  ('prod0009', 'Sản phẩm 10', 200000, 0.10, '2023/11/05', 0, 30, 0, 5, '', 'cate0056'),
  ('prod0010', 'Sản phẩm 11', 200000, 0.10, '2023/11/07', 0, 10, 0, 5, '', 'cate0051'),
  ('prod0011', 'Sản phẩm 12', 200000, 0.10, '2023/11/07', 0, 20, 0, 5, '', 'cate0041');

INSERT INTO favorproducts (user_id, prod_id)
VALUES
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

INSERT INTO cart (user_id, prod_id)
VALUES
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

INSERT INTO payingmethod (pay_id, pay_name)
VALUES
  ('pay00', 'Tiền mặt'),
  ('pay01', 'Ngân hàng');

INSERT INTO orders (order_id, order_datetime, order_total_cost, user_id, pay_id, bank_id, trans_id, loca_id, order_status, order_is_paying)
VALUES
  ('abcd1234', '2023/10/10',      0, 'user0000', 'pay00', NULL,       'tran0000', 'loca0000', 0, 0),
  ('efgh5678', '2023/10/11', 100000, 'user0001', 'pay01', 'bank0001', 'tran0001', 'loca0001', 0, 1),
  ('abce1234', '2023/10/12',  50000, 'user0002', 'pay00', NULL,       'tran0001', 'loca0002', 0, 0),
  ('ijkl2712', '2023/10/13',  75000, 'user0003', 'pay00', NULL,       'tran0001', 'loca0003', 0, 0),
  ('mnop0701', '2023/10/14',  35000, 'user0004', 'pay01', 'bank0002', 'tran0001', 'loca0004', 0, 1),
  ('camh1811', '2023/10/15',  45000, 'user0000', 'pay00', NULL,       'tran0000', 'loca0000', 1, 1),
  ('annn1910', '2023/10/16',  70000, 'user0001', 'pay00', NULL,       'tran0001', 'loca0001', 0, 0),
  ('daub2411', '2023/10/17', 200000, 'user0002', 'pay01', 'bank0003', 'tran0001', 'loca0002', 0, 1),
  ('hieu2712', '2023/10/18',  30000, 'user0003', 'pay00', NULL,       'tran0000', 'loca0003', 0, 0),
  ('nadc1302', '2023/10/19',  60000, 'user0004', 'pay00', NULL,       'tran0001', 'loca0004', 0, 0),
  ('mnop9876', '2023/10/20', 120000, 'user0000', 'pay00', NULL,       'tran0001', 'loca0000', 1, 1),
  ('qrst1234', '2023/10/21', 150000, 'user0001', 'pay01', 'bank0004', 'tran0001', 'loca0001', 0, 1),
  ('stuv1234', '2023/10/22', 125000, 'user0002', 'pay00', NULL,       'tran0000', 'loca0002', 0, 0),
  ('fghj2222', '2023/10/23', 130000, 'user0003', 'pay01', 'bank0000', 'tran0001', 'loca0003', 1, 1),
  ('tyui1234', '2023/10/24', 140000, 'user0004', 'pay00', NULL,       'tran0000', 'loca0004', 0, 0),
  ('asdf1111', '2023/10/25',  90000, 'user0000', 'pay01', 'bank0001', 'tran0001', 'loca0000', 0, 1),
  ('vbnm1122', '2023/10/26', 500000, 'user0001', 'pay00', NULL,       'tran0000', 'loca0001', 0, 0);