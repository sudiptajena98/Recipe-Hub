import axios from "axios";
const BASE_URL = "http://192.168.1.4:3001";
export const createRecipe = async (recipeData: any) => {
  const response = await axios.post(`${BASE_URL}/api/recipes`, recipeData );
  return response.data;
};