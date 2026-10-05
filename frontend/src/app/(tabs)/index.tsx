import SafeAreaView from "@/components/SafeAreaView";
import { fetchAllRecipes } from "@/services/recipes.services";
import { IRecipe } from "@/types/recipes.types";
import { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import RecipeCard from "@/components/RecipeCard";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

const HomeScreen = () => {
    const router = useRouter()
    const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);
    const handelGetAllRecipes = async () => {
        const response = await fetchAllRecipes();
        setAllRecipes(response || [])
    };
    useFocusEffect(
  useCallback(() => {
    handelGetAllRecipes();
  }, [])
);
    const handelNavigation = (id: string) => {
        router.push(`/details/${id}`)
    }
    useEffect(() => {
        handelGetAllRecipes();
    }, []);
    if (allRecipes.length === 0) {
        return null;
    }
    return (
        <SafeAreaView className="h-full p-4 bg-vista-white" edges={["top"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="relative">
                    {allRecipes.length > 0 && (
                        <Image source={{ uri: allRecipes[0].thumbnail }} className="w-full h-75 rounded-lg" />
                    )}
                    <View className="h-full opacity-20 rounded-lg w-full bg-black absolute"></View>
                    <LinearGradient
                        colors={["transparent", "rgba(0,0,0,0.40)"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            borderRadius: 8,
                        }}
                    />
                    <View className="absolute top-[3.8rem] left-4 flex items-start">
                        <View className="flex flex-row gap-2">
                            <View className="flex flex-row gap-1 items-center bg-ebb py-1 px-3 rounded-full">
                                <AntDesign name="field-time" size={24} color="black" />
                                <Text className="text-cod-gray text-[12px] font-medium">
                                    {allRecipes[0].Prep_time_minutes}min
                                </Text>
                            </View>
                            <View className="flex flex-row gap-1 items-center bg-ebb py-1 px-3 rounded-full">
                                <Text className="text-burning-orange">*</Text>
                                <Text className="text-cod-gray text-[0.75rem] font-medium">
                                    {allRecipes[0].rating}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-white text-[1.75rem] font-bold mt-3">{allRecipes[0].name}</Text>
                        <Text className="text-white text-base mt-3">{allRecipes[0].short_description}</Text>
                        <Pressable
                            onPress={() =>
                                handelNavigation(String(allRecipes[0]._id))}
                            className="mt-8 bg-burning-orange rounded-lg px-4 py-3">
                            <Text className="text-white text-[0.875rem] font-semibold">View Recipe</Text>
                        </Pressable>
                    </View>
                </View>

                <View className="mt-8">
                    <Text className="text-cod-gray font-semibold text-[1.25rem]">Trending Now</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            gap: 18,
                        }}
                    >
                        {allRecipes.map((recipe) => {
                            return <RecipeCard key={recipe._id} recipe={recipe} />
                        })}
                    </ScrollView>
                </View>
                <View className="mt-8 pb-24">
                    <Text className="text-cod-gray font-semibold text[5.25rem]">All Recipes</Text>
                    {allRecipes.map((recipe) => {
                        return (<Pressable key={recipe._id} onPress={() => handelNavigation(String(recipe._id))} className=" flex flex-row items-center gap-4 mt-4 border border-cavern-pink  bg-white rounded-2xl">
                            <Image source={{ uri: recipe.thumbnail }} className="h-24 w-24 rounded-lg" />
                            <View className="flex">
                                <Text className="text-cod-gray text-lg ">{recipe.name}</Text>
                                <Text className="text-kabul">{recipe.short_description.length > 30 ? recipe.short_description.slice(0, 30) + "......" : recipe.short_description}</Text>
                                <View className="flex flex-row items-center gap-2">
                                    <View className="flex flex-row gap-1 items-center">
                                        <AntDesign name="field-time" size={20} color="black" />
                                        <Text className="font-medium text-sm text-kabul" >{recipe.Prep_time_minutes}m</Text>
                                    </View>
                                    <View className="h-1.5 w-1.5 bg-kabul opacity-80 rounded-full"></View>
                                    <View className="flex flex-row gap-1 items-center">
                                        <Text className="font-medium text-sm">{recipe.calorie}</Text>
                                        <SimpleLineIcons name="energy" size={16} color="black" />
                                        <Text className="text-orange-400">*</Text>
                                        <Text className="font-medium text-sm text-kabul">{recipe.rating}</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;