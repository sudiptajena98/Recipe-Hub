import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  cookTime: {
    type: Number,
    required: true,
  },

  serving: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Favourite = mongoose.model("Favourite", favouriteSchema);

export default Favourite;