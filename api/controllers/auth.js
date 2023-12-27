import jwt from "jsonwebtoken";
import { dbc } from "../db/getDB.js";
import bcrypt from "bcryptjs";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const db = await dbc();
  const user = await db.query("SELECT fullname, email, password FROM `user` WHERE `email` = ?",[email]);
  await db.end();
  if (user[0]) {
    //console.log(password, user[0].password);
    const vp = await bcrypt.compare(password, user[0].password);
    
    if (vp === false){
      res.status(400).json({ error: "Invalid password" });
    } else {
      const token = jwt.sign({
        email: user.email,
        id: user[0].id,
        user: {email: user[0].email, id: user[0].id},
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
      },process.env.SECRET_KEY);
  
      res.status(200).json({success: true, token: token});
    }
    
    
  } else {
    res.status(400).json({ error: "User not found" });
  }
  res.status(200);
};
