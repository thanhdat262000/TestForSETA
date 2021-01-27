require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.PORT || 5000;
import postRoutes from "./routes/posts.js";
import userRouter from "./routes/user.js";
import bookRouter from "./routes/book.js";
import { authorizationMiddleware } from "./middlewares/authorization.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/user", userRouter);
app.use("/books", authorizationMiddleware, bookRouter);
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
