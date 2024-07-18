import express from "express"; // package imports 
import dotenv  from "dotenv";// package imports
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js"; // file imports
import messageRoutes from "./routes/message.routes.js"; // file imports
import userRoutes from "./routes/user.routes.js"; // file imports

import connectToMangoDB from "./db/connectToMangoDB.js"; // db imports
// const dotenv = require("dotenv"); // we cannot user ${port} directly so we require dotenv and then config

const app = express(); // variables
const PORT = process.env.PORT || 5000; // we will get it from process.env or from port 5000

dotenv.config(); //.envConfig

app.use(express.json()); // The express.json() middleware should be added before your routes to ensure that incoming request bodies are properly parsed before they reach your route handlers
app.use(cookieParser());

app.use("/api/auth", authRoutes); //middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

 // to parse the incoming request with JSON payloads (from req.body)
// app.get("/", (req, res) => {
//     //root route that is http://localhost:5000/
//     res.send("Server is ready");
// });
// app.get("/api/auth/signup", (req, res) => {
//     console.log("signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//     console.log("login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("logout route");
// }); this will become and complex if we keep on giving routes like this instead we can do this

app.listen(PORT, () => {
    connectToMangoDB();
    console.log(` server running on port  ${PORT}`);
}); //  we don't want this to be hard coded value so we do SEE LINE 3