const express = require("express");
const mongoose = require("mongoose");

const cors = require("./middlewares/cors");
const trimBody = require("./middlewares/trimBody");
const session = require("./middlewares/session");
const authController = require("./controllers/authController");
const dataController = require("./controllers/dataController");
const connectionString = "mongodb://localhost:27017/car-market";

async function start() {
  await mongoose.connect(connectionString);
  console.log("Database connected");

  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(trimBody());
  app.use(session());

  app.get("/", (req, res) => {
    res.json({ message: "REST service operational" });
  });

  app.use("/api/users", authController);
  app.use("/api/catalog", dataController);

  app.listen(3030, () => console.log("REST service started"));
}

start();
