export interface IRecipe {
  _id: string;
  name: string;
  ingredients: string[];
  short_description: string;
  rating: number;
  Prep_time_minutes: number;
  serving: number;
  calorie: number;
  protein: number;
  carbs: number;
  fats: number;
  thumbnail: string;
  instruction: string[];
  created_at: string;
}
type IAddToFavourites = {
  recipeId: string;
  title: string;
  image: string;
  cookTime: number;
  serving: number;
  description: string;
};
export { IAddToFavourites };