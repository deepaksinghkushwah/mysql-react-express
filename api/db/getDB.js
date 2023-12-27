import mysql from "promise-mysql";
export const dbc = async () => {
  return mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "",
    database: "mysql_react_express",
    connectionLimit: 100,
    queueLimit: 0,
    waitForConnection: true,
  })
};