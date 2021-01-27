import pool from "../db.js";
export const getAllBooks = (req, res) => {
  pool.query("SELECT * FROM books ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query("SELECT * FROM books WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
export const addBook = (req, res) => {
  const { author, name, date, publisher, pageNumber, description } = req.body;

  pool.query(
    "INSERT INTO books (author, name, date, publisher, pageNumber, description) VALUES ($1, $2, $3, $4, $5, $6)",
    [author, name, date, publisher, pageNumber, description],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Book added!`);
    }
  );
};
const updateBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const { author, name, date, publisher, pageNumber, description } = req.body;

  pool.query(
    "UPDATE users SET author = $1, name = $2, date = $3, publisher = $4, pageNumber = $5, description = $6 WHERE id = $7",
    [author, name, date, publisher, pageNumber, description, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};
