require("dotenv").config();
const express = require("express");
const db = require("./db/mongo");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const path = require("path");
const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

app.use("/", (req, res, next) => {
  res.send("server running");
  next();
});

// if (process.env.NODE_ENV === "production") {
//   app.use("/", express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   });
// }

app.listen(PORT, () => {
  console.log(PORT);
  console.log(`server running at ${PORT}`);
});
