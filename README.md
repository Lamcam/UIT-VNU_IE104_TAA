# UIT-VNU_IE104_TAA

Đây là đồ án cuối kỳ môn IE104 - Internet và công nghệ Web của nhóm sinh viên của trường Đại học Công nghệ Thông tin - ĐHQG

# Guild Code

```HTML
index.html

<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="author" content="IE104.O12_Group3">
  <meta name="description" content="Trang web TAA là một nền tảng thương mại
    điện tử chuyên về bán đồ phụ kiện trang sức. Với sự tập trung vào việc cung
    cấp những sản phẩm chất lượng cao và thiết kế độc đáo, TAA đã trở thành
    điểm đến lý tưởng cho những người đam mê phụ kiện và trang sức.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/TAA_FE/src/base.css">
  <script src="https://code.jquery.com/jquery-3.3.1.js"
    integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60"
    crossorigin="anonymous"></script>
  <script src="/TAA_FE/res/js/main.js"></script>
  <title>TAA - **Tiêu đề trang**</title>
</head>
<body>
  <div id="main" class="on-primary">
    <div id="header"></div>
    <div id="nav-tree"></div>

    <main>
      <section class="mt-12"> <!-- Dành cho việc chia cột nội dung-->
        <div class="container row">
          <aside class="col-3"></aside>
          <section class="col-8">
            <h1 class="section__title"></h1>
            <div class="section__content"></div>
          </section>
        </div>
      </section>


      <section class="mt-12"> <!-- Giới hạn lại độ rộng của nội dung -->
        <div class="container">
          <h1 class="section__title"></h1>
          <div class="section__content"></div>
        </div>
      </section>


      <section class="mt-12"> <!-- Không giới hạn nội dung -->
        <h1 class="section__title"></h1>
        <div class="section__content"></div>
      </section>

      <div class="mt-12">
        <img src="...">
      </div>
    </main>

    <!-- <footer></footer> -->
    <div id="footer"></div>

    <!-- Modal -->
    <div id="modal"></div>
  </div>
  <script>
    $(document).ready(function () {
      $('#header').load('/TAA_FE/src/partials/header--unauth.html');
      $('#nav-tree').load('/TAA_FE/src/partials/nav-tree.html');
      $('#footer').load('/TAA_FE/src/partials/footer.html');
    });
  </script>
</body>
</html>
```
