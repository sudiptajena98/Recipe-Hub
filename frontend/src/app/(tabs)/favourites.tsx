import SafeAreaView from"@/components/SafeAreaView";
import {View,Text, Alert, ActivityIndicator, ScrollView, Pressable,Image} from "react-native";
import {useRouter} from "expo-router";
import { Activity, useCallback, useEffect, useState} from "react";
import { useUser } from "@clerk/expo";
import { IAddToFavourites } from "@/types/recipes.types";
import { fetchUserFavouritesRecipes,fetchDeleteFavouriteRecipe } from "@/services/recipes.services";
import { useFocusEffect } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const FavouritesScreen=()=>{
    const router = useRouter();
const{user}=useUser();
const[loading,setLoading]=useState(false);
const[favouritesList,setFavouritesList]=useState<IAddToFavourites[]>([]);
const handelFetchAllFavourites=async()=>{
    if(!user) return null; 
    setLoading(true);
    const data=await fetchUserFavouritesRecipes(user.id); 
    setLoading(false);
    setFavouritesList(data || []);
};
const handelDeleteFavourites=async(id:string)=>{
    if(!user){ return null; }
    try{
await fetchDeleteFavouriteRecipe(user.id, id);
    }
    catch(error){
        Alert.alert("Error","Failed to delete recipe from favourites");
    }
    handelFetchAllFavourites();
};
 const handelNavigation=(id:string)=>{
    router.push(`/details/${id}`);
 };
useFocusEffect(
  useCallback(() => {
    handelFetchAllFavourites();
  }, [])
);
 if(loading){
    return <ActivityIndicator/>;
 }
 return(
 <SafeAreaView className="h-full p-4 bg-vista-white" edges={["top"]}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-[2rem] font-bold">Favourites</Text>
        <Text className="mt-2 text-kabul ">{favouritesList.length} Recipes saved for your next culinary adventure .</Text>
        <View className="mt-8 flex gap-8 pb-24 ">{favouritesList.map((recipe,index)=>{
            return (
                <Pressable key={index} onPress={()=>handelNavigation(recipe.recipeId)}>
        <Image source={{ uri: recipe.image}} className="w-full h-100" />
        <View className="absolute top-4 right-4 bg-white opacity-80 rounded-full p-3">
         <AntDesign name="heart" size={24} color="#970000bf"  />
        </View>
        <Pressable onPress={()=>handelDeleteFavourites(recipe.recipeId )}className="absolute top-20 right-4 bg-white opacity-80 rounded-full p-4">
<MaterialIcons name="delete-outline" size={20} color="text-kabul " />
        </Pressable>
        <View>
            <Text className="text-xl font-semibold">{recipe.title}</Text>
             <Text className="mt-2 text-kabul">{recipe.description}</Text>
        </View>
                </Pressable>
            )
        })}</View>
        </ScrollView>
</SafeAreaView>
    );
};

export default  FavouritesScreen;