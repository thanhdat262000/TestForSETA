import { config } from "dotenv/types";
import jwt from "jsonwebtoken";
require("dotenv").config();
// According to documentation, middleware funtions are functions that have access to the request object (req),
// the response object (res), and the next function in the application’s request-response cycle.
// The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
// Basically, it is a function that will receive the request and response object, and you can handle these object before send them
// to the next middleware or end the cycle.
export const authorizationMiddleware = (req, res, next) => {
  if (req.headers["x-access-token"] == null) {
    res.status(403).send("Unauthorized!");
  }
  jwt.verify(
    req.headers["x-access-token"],
    process.env.JWT_KEY,
    (err, decoded) => {
      try {
        if (decoded.role) next();
        else res.status(403).send("Unauthorized!");
      } catch (err) {
        res.sendStatus(401);
      }
    }
  );
};
