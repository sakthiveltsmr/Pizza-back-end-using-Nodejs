//server start connection;

//import files
//express

const express = require("express");
const db = require("./db/mongo");
const pizza = require("./modules/pizzaModule");
const app = express();
const PORT = 5000;

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizza", pizzasRoute);

app.use("/", (req, res, next) => {
  res.send("server running");
  next();
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
