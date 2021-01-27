import express from "express";
import {
  getAllBooks,
  getABookById,
  addABook,
  updateBookById,
} from "../controllers/book/js";
const bookRouter = express.Router();
bookRouter.get("/books", getAllBooks());
bookRouter.get("/books/:id", getABookById());
bookRouter.post("/books/add/:id", addABook());
bookRouter.put("/books/update/:id", updateBookById());
