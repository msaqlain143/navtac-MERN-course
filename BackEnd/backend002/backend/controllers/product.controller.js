function Product(req, res) {
  res.send("Hello User!");
}

function registerProduct(req, res) {
  res.send("Hello Register!");
}
function deleteProduct(req, res) {
  res.send("Hello Login!");
}

export { Product, registerProduct, deleteProduct };
