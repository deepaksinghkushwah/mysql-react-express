import registerValidation from "../validations/users.js";
import bcrypt from "bcryptjs";
import { dbc } from "../db/getDB.js";

export const getUsers = async (req, res) => {
  const db = await dbc();
  const users = await db.query("SELECT id, fullname, email, role FROM `user`")
  res.json({ data: users, success: true });
};

export const createUser = async (req, res) => {
  const user = await req.body;
  // validate data
  const validation = null;
  try {
    await registerValidation(user);
  } catch (error) {
    return res.json({ success: false, error: error });
  }

  try {
    const db = await dbc();
    user.password = await bcrypt.hash(user.password, 10);
    const insertQuery = "INSERT INTO `user` SET `fullname` = ?, `email` = ?, `password` = ?, `role` = 2";
    await db.query(insertQuery, [user.fullname, user.email, user.password]);
    await db.end();
    res.json({ message: "User added", success: true });

  } catch (error) {
    res.status(500).json({ error: error, success: false });
  }
};

export const getUserWithId = async (req, res) => {

  const id = req.params.id;
  try {
    const db = await dbc();
    const user = await db.query("SELECT id, email, fullname, role FROM `user` WHERE id = ?", [id]);
    db.end();
    return res.send({ user, success: true });
  } catch (error) {
    return res.status(404).json({
      error: "User not found",
    });
  }
};

export const deleteUserWithId = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send({ message: `User removed with ${id}`, success: true });
};

export const updateUserWithId = async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const user = await User.findById(id);

  if (firstname) user.firstname = firstname;

  if (lastname) user.lastname = lastname;

  if (age) user.age = age;

  await user.save();

  res.send({ message: `User updated with ${id}`, success: true });
};
