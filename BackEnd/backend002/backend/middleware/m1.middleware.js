function m1(req, res, next) {
  console.log("Middleware 1 hits");
  next();
}

export default m1;
