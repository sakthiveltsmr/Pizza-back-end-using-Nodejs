//server start connection;

//import files
//express
const express = require("express");
const db = require("./db/mongo");

const app = express();
const PORT = 5000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
