const moveToProducts = (type) => {
  if (!type) {
    console.error('Type is not defined');
    return;
  }

  if (type !== "products" && type !== "services") {
    console.error('Type is not valid');
    return;
  }

  if (type === "products") {
    window.location.href = "/products/detail?id=1";
  }
}