import CustomError from "../utils/CustomError.js";
import jwt from "jsonwebtoken";
function verifyToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  console.log(req.headers, "HEADERSSSSSSSSSSSSS");
  console.log("TOKEN FROM HEADER", bearerToken);
  if (!bearerToken) {
    return next(new CustomError("Token not found", 401));
  }

  try {
    const token = bearerToken.replace("Bearer ", "");
    console.log(token, "BR");
    console.log("env variable ", process.env.JWT_SECRET_KEY);
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode, "DECODED TOKEN");
    if (!decode) {
      return next(new CustomError("Token is not valid", 401));
    }
    req.user = decode;
    console.log("REQUEST USER", req.user);
    next();
  } catch (error) {
    console.log("ERROR IN VERIFY TOKEN ", error);
    // expiry token error handling
    if (error.name === "TokenExpiredError") {
      return next(new CustomError("Token is expired", 403));
    }
    return next(new CustomError("Token is not valid", 403));
  }
}

export default verifyToken;
