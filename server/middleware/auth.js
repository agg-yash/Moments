import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // token is stored in the header
    const isCustomAuth = token.length < 500; // token length < 500 means it is our own token
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test"); // decode token
      req.userId = decodedData?.id; // store user id in request
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
