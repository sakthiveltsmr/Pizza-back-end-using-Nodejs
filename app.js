const express = require("express");
const db = require("./db/mongo");
const app = express();
const PORT = 5000;

app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

// app.use("/api/pizzas", pizzasRoute);

app.use("/", (req, res, next) => {
  res.send("server running");
  next();
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
