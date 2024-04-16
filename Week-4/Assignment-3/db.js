const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config({ path: "./dot.env" });

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

exports.getAllUser = async () => {
  const [rows] = await pool.query("SELECT * FROM user");
  console.log(rows);
  return rows;
};

exports.getUserByEmail = async (email) => {
  const [rows] = await pool.query("SELECT * FROM user WHERE email = ? ", [
    email,
  ]);
  return rows[0];
};

exports.getUserByEmailandPassword = async (email, password) => {
  const [rows] = await pool.query(
    "SELECT * FROM user WHERE email = ? and password = ?",
    [email, password]
  );
  return rows[0];
};

exports.createUser = async (email, password) => {
  const [res] = await pool.query(
    "INSERT INTO user (email, password) VALUES (?,?)",
    [email, password]
  );
  return { id: res.insertId, email, password };
};
