const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

const connectionPool = async () => {
  dotenv.config();

  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASSWD || "",
    database: process.env.MYSQL_DB || "",
  });

  const connect = await connection.getConnection();

  return connect;
};

module.exports = connectionPool;
