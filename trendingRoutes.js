import express from "express";
import {
  createTrendingRecipe,
  getAllTrendingRecipe,
} from "../controllers/TrendingControllers.js";

const router=express.Router();
router.post("/recipe/trending",createTrendingRecipe);
router.get("/all-recipes/trending",getAllTrendingRecipe);
export default router;