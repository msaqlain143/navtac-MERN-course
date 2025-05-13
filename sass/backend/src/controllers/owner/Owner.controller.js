import CustomError from "../../utils/CustomError";

// const registerOwner = async function (req, res, next) {
//   throw new CustomError("this is my Custom Error ", 400, { data: null });
// };

const registerOwner = AsyncHandler(async function (req, res, next) {});

export { registerOwner };
