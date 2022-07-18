import {Response, Request, NextFunction} from "express";

const jwt = require("jsonwebtoken");

const auth = (req: Request, res:Response, next: NextFunction) => {
  // get token from header
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res.status(401)
      .json({message: "No token, authorization denied"});
  }
  //  verify token
  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error: any, decoded: any) => {
      if (error) {
        return res.status(401)
          .json({message: "Invalid token"});
      } else {
        next();
      }
    })
  } catch (e) {
    throw (e)
  }
}

export default auth