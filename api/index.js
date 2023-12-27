import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import "dotenv/config";
import { dbc } from "./db/getDB.js";



const app = express();
const port = process.env.NODE_PORT || process.env.APP_PORT;

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);


app.get("/user", async(req, res) => {
  try {
    const db = await dbc();
    const result = await db.query("SELECT * FROM `user`");
    console.log(result);  
    db.end();
    return res.status(200).json({data: result});
  } catch(error){
    console.log(error);
  }  
});


app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs API project" });
});

app.listen(port, () => {
  console.log(`App server is running on http://localhost:${port}`);
});
