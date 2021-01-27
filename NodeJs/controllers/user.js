import pool from "../db.js";
import bcrypt from "bcrypt";
export const signUp = (re, res) => {
  const { name, email, phone, password } = req.body;
  let hashPassword = bcrypt.hash(password, 10);
  pool.query(
    `SELECT * FROM users
      WHERE email = $1`,
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(results.rows);

      if (results.rows.length > 0) {
        return res.render("register", {
          message: "Email already registered",
        });
      } else {
        pool.query(
          `INSERT INTO users (name, email, phone, password)
              VALUES ($1, $2, $3)
              RETURNING id, password`,
          [name, email, phone, hashedPassword],
          (err, results) => {
            if (err) {
              throw err;
            }
            res.status(201);
          }
        );
      }
    }
  );
};
export const signIn = (req, res) => {
  const { email, password } = req.body;
  pool.query(
    `SELECT * FROM users WHERE email = $1`,
    [email],
    (err, results) => {
      if (err) {
        throw err;
      }
      console.log(results.rows);

      if (results.rows.length > 0) {
        const user = results.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.log(err);
          }
          if (isMatch) {
            return done(null, user);
          } else {
            //password is incorrect
            return done(null, false, { message: "Password is incorrect" });
          }
        });
      } else {
        // No user
        return done(null, false, {
          message: "No user with that email address",
        });
      }
    }
  );
};
