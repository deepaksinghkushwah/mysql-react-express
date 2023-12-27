import jwt from "jsonwebtoken";
import { dbc } from "../db/getDB.js";
export default async (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];
  if (!token) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const db = await dbc();
    const result = await db.query("SELECT * FROM `user` WHERE id = ?", [decodedToken.id]);
    const user = result[0];
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      error: "Invalid request",
    });
  }
};
