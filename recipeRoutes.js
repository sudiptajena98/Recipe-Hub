import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getRecipeDetails,
  healthCheck,
} from "../controllers/recipeController.js";
const router = express.Router();
router.post("/recipes", createRecipe);
router.get("/all-recipes", getAllRecipes);
router.get("/details/:recipeId", getRecipeDetails);
router.get("/health", healthCheck);
export default router;