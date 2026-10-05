import express from "express";
import {
  addToFavourites,
  getUserFavourites,
  deleteFavourite,
} from "../controllers/favouriteControllers.js";
const router = express.Router();
router.post("/add-to-favourites", addToFavourites);
router.get("/favourites/:userId", getUserFavourites);
router.delete("/delete-favourites/:userId/:recipeId",deleteFavourite);
export default router;