const moveToProducts = (type) => {
  if (!type) {
    console.error('Type is not defined');
    return;
  }

  if (type !== "discount" && type !== "freeship") {
    console.error('Type is not valid');
    return;
  }

  if (type === "discount") {
    window.location.href = "/products";
    return;
  }

  if (type === "freeship") {
    window.location.href = "/products";
    return;
  }
}