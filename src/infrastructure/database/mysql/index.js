const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

const connectionPool = async () => {
  dotenv.config();

  const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || "viaduct.proxy.rlwy.net",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWD || "YyMcSAjskRLfwxJDqXLnVasmhupcvKNI",
    database: process.env.MYSQL_DB || "railway",
  });

  const connect = await connection.getConnection();

  return connect;
};

module.exports = connectionPool;
