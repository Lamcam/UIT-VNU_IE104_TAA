function setupStarRating(starSelector, ratingContainerId) {
  var stars = document.querySelectorAll(starSelector);

  stars.forEach((item, index1) => {
    item.addEventListener("click", () => {
      stars.forEach((star, index2) => {
        index1 >= index2
          ? star.classList.add("active")
          : star.classList.remove("active");
      });

      // Lưu giá trị rating
      var selectedRating = index1 + 1;
      document
        .getElementById(ratingContainerId)
        .setAttribute("data-rating", selectedRating);
    });
  });
}

setupStarRating(".star-icon", "rating");
setupStarRating(".star-icon-service", "rating2");

// Kiểm tra đã chọn số sao đánh giá
function validateAndNextModal() {
  // Kiểm tra required cho textarea
  var reviewTextarea = document.getElementById("form__review");
  if (!reviewTextarea.checkValidity()) {
    alert("Vui lòng nhập đánh giá sản phẩm.");
    return;
  }

  // Kiểm tra đã đánh giá chất lượng sản phẩm
  if (!hasSelectedStars("rating")) {
    alert("Vui lòng đánh giá chất lượng sản phẩm.");
    return;
  }

  // Kiểm tra đã đánh giá dịch vụ vận chuyển
  if (!hasSelectedStarsService("rating2")) {
    alert("Vui lòng đánh giá dịch vụ vận chuyển.");
    return;
  }

  // Nếu mọi thứ hợp lệ, chuyển đến modal tiếp theo
  modalCtl.nextModal("#modal--noti");
}

// Kiểm tra đã chọn số sao rating
function hasSelectedStars(ratingContainerId) {
  let stars = document
    .getElementById(ratingContainerId)
    .querySelectorAll(".star-icon");
  return Array.from(stars).some((star) => star.classList.contains("active"));
}

// Kiểm tra đã chọn số sao rating2
function hasSelectedStarsService(ratingContainerId) {
  let stars = document
    .getElementById(ratingContainerId)
    .querySelectorAll(".star-icon-service");
  return Array.from(stars).some((star) => star.classList.contains("active"));
}
