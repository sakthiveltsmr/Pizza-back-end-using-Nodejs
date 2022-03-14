// //db connections initialization;

// // import mongoClient driver
// const { MongoClient } = require("mongodb");

// const DB_URL =
//   "mongodb+srv://sakthi123:sakthi123@cluster0.ydepc.mongodb.net/person?retryWrites=true&w=majority";
// const DB_NAME = "pizza";
// const client = new MongoClient(DB_URL); //obj literals

// module.exports = {
//   db: null, //db data null
//   users: null, //initially empty; cpllection;

//   // db connection;
//   async connectDB() {
//     await client.connect(); //db connected
//     console.log("db connected successfully");

//     this.db = client.db(DB_NAME); // db selection;
//     console.log(`${DB_NAME} selected successfully`);

//     //select collection

//     this.users = this.db.collection("users"); //select collections
//   },
// };

const mongoose = require("mongoose");
