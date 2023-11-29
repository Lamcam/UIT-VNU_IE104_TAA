function validateForm() {
  // Lấy giá trị các trường nhập mật khẩu
  var oldPassword = document.getElementById("oldPassword").value;
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
 
  // Kiểm tra xem các trường có được điền đầy đủ không
  if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
    alert("Vui lòng điền đầy đủ thông tin");
    return false;
  }

  // Kiểm tra xem mật khẩu mới và nhập lại mật khẩu mới có giống nhau không
  if (newPassword !== confirmPassword) {
    alert("Mật khẩu mới và Nhập lại mật khẩu mới phải giống nhau");
    return false;
  }

  // Kiểm tra xem mật khẩu mới có đáp ứng yêu cầu không
  if (!isValidPassword(newPassword)) {
    alert("Mật khẩu mới phải chứa ít nhất 8 ký tự từ a-z, A-Z, 0-9");
    return false;
  }

  // Kiểm tra xem mật khẩu cũ có đáp ứng yêu cầu không
  if (!isValidPassword(oldPassword)) {
    alert("Mật khẩu cũ phải chứa ít nhất 8 ký tự từ a-z, A-Z, 0-9");
    return false;
  }
  // Kiểm tra xem mật khẩu cũ và mật khẩu mới có khác nhau không
  if (oldPassword === newPassword) {
    alert("Mật khẩu cũ và mật khẩu mới phải khác nhau");
    return false;
  }
  // Nếu mọi thứ hợp lệ, chuyển đến modal
  modalCtl.nextModal("#modal--noti");
  return false;
}

function isValidPassword(password) {
  // Kiểm tra xem mật khẩu có ít nhất 8 ký tự từ a-z, A-Z, 0-9 không
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
}
