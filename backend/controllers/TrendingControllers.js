import Trending from"../models/Trending.js";
export const createTrendingRecipe= async (req, res) => {
  try {
    const trending = await Trending.create(req.body);
    return res.status(201).json(trending);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllTrendingRecipe = async (req, res) => {
  try {
    const allTrendingRecipes = await Trending.find();
    return res.status(200).json(allTrendingRecipes);
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};