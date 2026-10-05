import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  ingredients: {
    type: [String],
    required: true,
  },

  short_description: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default: 0,
  },

  Prep_time_minutes: {
    type: Number,
    required: true,
  },

  serving: {
    type: Number,
    required: true,
  },

  calorie: {
    type: Number,
    required: true,
  },

  protein: {
    type: Number,
    required: true,
  },

  carbs: {
    type: Number,
    required: true,
  },

  fats: {
    type: Number,
    required: true,
  },

  thumbnail: {
    type: String,
    required: true,
  },

  instruction: {
    type: [String],
    required: true,
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;