$(() => {
  $(document).on("click", ".profile3", function (event) {
    event.preventDefault();

    localStorage.setItem('flag', 1)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
  })

  $(document).on("click", ".order3", function (event) {
    event.preventDefault();

    localStorage.setItem('flag', 2)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
  })

  $(document).on("click", ".product3", function (event) {
    event.preventDefault();

    localStorage.setItem('flag', 3)
    window.location.replace("/TAA_FE/src/homepage/accountPage/profileInfo.html")
  })
})