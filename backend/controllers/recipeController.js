import Recipe from "../models/Recipe.js";
export const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    return res.status(200).json(allRecipes);
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};
export const getRecipeDetails = async (req, res) => {
  try {
    const { recipeId } = req.params;
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({
        error: "Recipe not found",
      });
    }
    return res.status(200).json({
      recipe_detail: recipe,
    });
  } catch (error) {
    return res.status(500).json({
      error: "something went wrong",
    });
  }
};
export const healthCheck = (req, res) => {
  return res.status(200).json({
    success: true,
  });
};