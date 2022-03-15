//server start connection;

//import files
//express

const express = require("express");
const db = require("./db/mongo");
const pizza = require("./modules/pizzaModule");
const app = express();
const PORT = 5000;
app.use(express.json());

app.use("/", (req, res, next) => {
  res.send("server running");
  next();
});
app.get("/getpizzas", (req, res) => {
  pizza.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
      res.send(docs);
    }
  });
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
