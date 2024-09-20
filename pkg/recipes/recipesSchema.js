const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["breakfast", "brunch", "lunch", "dinner"],
  },

  recipeTitle: {
    type: String,
  },

  recipeDescription: {
    type: String,
  },

  preparationTime: {
    type: Number,
  },

  numberOfPeople: {
    type: Number,
  },

  recipeImage: {
    type: String,
    default: "dafault.png",
  },

  createdOn: {
    type: Date,
    default: Date.now,
  },

  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const Recipe = mongoose.model("Recipe", recipesSchema);
module.exports = Recipe;
