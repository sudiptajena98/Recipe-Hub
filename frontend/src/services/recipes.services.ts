import { BASE_URL } from "@/utils/constants";
const fetchAllRecipes = async () => {
  try {
    console.log("BASE_URL =", BASE_URL);

    const url = `${BASE_URL}/api/all-recipes`;

    console.log("URL =", url);
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error while fetching all recipes", error);
  }
};
//create i creating the frontend function to add a recipe to favourites.sends data to the backend.
const fetchAddToFavourites = async (requestPayload: any) => {
  try {
    const url = `${BASE_URL}/api/add-to-favourites`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestPayload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while adding recipe to favourites", error);
  }
};
//fetch userfavourites reipes for particular user
const fetchUserFavouritesRecipes = async (userId: string) => {
  try {
    const url = `${BASE_URL}/api/favourites/${userId}`;

    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error while fetching user saved recipes", error);
  }
};
//fetch allrecipes details
const fetchRecipeDetails = async (recipeId: string) => {
  try {
    const url = `${BASE_URL}/api/details/${recipeId}`;

    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error while fetching recipe details", error);
  }
};
const fetchDeleteFavouriteRecipe = async (
  userId: string,
  recipeId: string
) => {
  try {
    const url = `${BASE_URL}/api/delete-favourites/${userId}/${recipeId}`;

    const response = await fetch(url, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error deleting favourite recipe", error);
  }
};
export {fetchAllRecipes,fetchAddToFavourites,fetchUserFavouritesRecipes,fetchRecipeDetails,fetchDeleteFavouriteRecipe};