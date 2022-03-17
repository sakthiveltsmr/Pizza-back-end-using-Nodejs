const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://sakthi123:sakthi123@cluster0.ydepc.mongodb.net/pizza?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo db connection successfully");
});
db.on("error", () => {
  console.log("mongo db connection failer");
});

module.exports = mongoose;
