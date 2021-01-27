import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
const Pool = pg.Pool;
const port = process.env.PORT || 5000;
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "api",
  password: "123456789",
  port: 5432,
});
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
