import Favourite from "../models/Favourite.js";
export const addToFavourites = async (req, res) => {
  try {
    const {
      userId,
      recipeId,
      title,
      image,
      cookTime,
      serving,
      description,
    } = req.body || {};

    if (!userId || !recipeId || !title) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }
    const favourite = await Favourite.create({
      userId,
      recipeId,
      title,
      image,
      cookTime,
      serving,
      description,
    });
    return res.status(201).json(favourite);
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};
export const getUserFavourites = async (req, res) => {
  try {
    const { userId } = req.params;
    const userFavourites = await Favourite.find({
      userId,
    });
    return res.status(200).json(userFavourites);
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};
export const deleteFavourite = async (req, res) => {
  try {
    const { userId, recipeId } = req.params;
    await Favourite.deleteOne({
      userId,
      recipeId,
    });
    return res.status(200).json({
      success: true,
      message: "Favourite deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};