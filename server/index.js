import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to REACT + Node js POC.",
  });
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
