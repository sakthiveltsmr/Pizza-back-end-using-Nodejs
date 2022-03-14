const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
  name: { type: String, require },
  varient: [],
  prices: [],
  category: { type: String, require },
  image: { type: String, require },
  description: { type: String, require },
});
