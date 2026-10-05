import { IRecipe, IAddToFavourites } from "@/types/recipes.types";
import { useRouter } from "expo-router";
import { View, Text, Image, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import EvilIcons from "@expo/vector-icons/build/EvilIcons";
const SearchCardRecipe = ({ recipe, onAddToFavourites }: { recipe: IRecipe; onAddToFavourites: (obj: IAddToFavourites) => void; }) => {
    const router = useRouter()
    const handelNavigation = (id: string) => {
        router.push(`/details/${id}`)
    };
    return (<Pressable className="relative mt-4 rounded-3xl shadow-lg overflow-hidden" onPress={() => handelNavigation(String(recipe._id))} key={recipe._id}>
        <Image source={{ uri: recipe.thumbnail }} className="w-100 h-75" />
        <View className="absolute top-4 left-4 flex flex-row gap-1 items-center bg-ebb py-2 px-2.5 rounded--full">
            <AntDesign name="field-time" size={16} color="black" />
            <Text className="text-cod-gray text-[12px] font-medium">{recipe.Prep_time_minutes}m</Text>
        </View>
        <View className="absolute top-4 left-24 flex flex-row gap-1 items-center bg-ebb py-1.5 px-2.5 rounded-full">
            <Text className="text-burning-orange">*
            </Text>
            <Text className="text-cod-gray text-[0.75rem] font-medium">{recipe.rating}</Text>
        </View>
        <Pressable onPress={() => onAddToFavourites({
            recipeId: recipe._id,
            title: recipe.name,
            image: recipe.thumbnail,
            cookTime: recipe.Prep_time_minutes,
            serving: recipe.serving,
            description: recipe.short_description,
        })} className="absolute top-4 right-4 bg-ebb py-2 px-2.5 rounded-full flex flex-row gap-1 items-center">
            <EvilIcons name="heart" size={24} color="black" />
        </Pressable>
        <View>
            <Text className="text-xl font-medium pl-2">{recipe.name}</Text>
            <Text className="text-kabul  mt-1 pl-4">{recipe.short_description}</Text>
        </View>
    </Pressable>
    );
};
export default SearchCardRecipe;