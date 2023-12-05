
    const posts = document.querySelectorAll('.news__item')
    posts.forEach((item) => {
        item.addEventListener("click", () => {
            window.location.href = "/news/post?id=1"
        })

    })
