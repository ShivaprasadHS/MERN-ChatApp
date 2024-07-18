import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

// router.get("/signup",(req,res) => {
//     res.send("Login Route");
// });

// router.get("/login",(req,res) => {
//     res.send("Login Route");
// });

// router.get("/logout",(req,res) => {
//     res.send("Login Route");
// }); we can organize this by removing t6he function and putting in their own file

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;