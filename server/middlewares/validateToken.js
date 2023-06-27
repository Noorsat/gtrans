import jwt from 'jsonwebtoken';

import User from './../models/user.js'

export default async function validateToken(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  let result;
  if (!authorizationHeader)
    return res.status(401).json({
      error: true,
      message: "no access token",
    });

  const token = req.headers.authorization.split(" ")[1]; 
  const options = {
    expiresIn: "1h",
  };
  try {
    let user = await User.findOne({
      accessToken: token,
    });
    console.log(user);
    if (!user) {
      result = {
        error: true,
        message: `Authorization error`,
      };
      return res.status(403).json(result);
    }

    if (token !== user?.accessToken) {
      result = {
        error: true,
        message: `Invalid token`,
      };

      return res.status(401).json(result);
    }

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      result = {
        error: true,
        message: `TokenExpired`,
      };
    } else {
      result = {
        error: true,
        message: `Authentication error`,
      };
    }
    return res.status(403).json(result);
  }
}
