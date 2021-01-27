import express from "express";
import {
  getAllBooks,
  getABookById,
  addABook,
  updateBookById,
} from "../controllers/book/js";
const bookRouter = express.Router();
bookRouter.get("/", getAllBooks());
bookRouter.get("/:id", getABookById());
bookRouter.post("/add/:id", addABook());
bookRouter.put("/update/:id", updateBookById());
export default bookRouter;
