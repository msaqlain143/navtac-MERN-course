async function errorMiddleware(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Somthing Went Wrong";

  res.status(statusCode).json({
    message: message,
    statusCode: statusCode,
    date: err.data,
  });
}

export default errorMiddleware;
