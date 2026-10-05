import SafeAreaView from"@/components/SafeAreaView";
import { fetchAddToFavourites, fetchAllRecipes } from "@/services/recipes.services";
import { IRecipe } from "@/types/recipes.types";
import { useUser } from "@clerk/expo";
import { useEffect, useState } from "react";
import {View,Text, ScrollView,TextInput, Alert} from "react-native";
import { IAddToFavourites } from "@/types/recipes.types";
import Feather from "@expo/vector-icons/build/Feather";
import SearchCardRecipe from "@/components/SearchCardRecipe";
const SearchScreen=()=>{
    const{user}=useUser();
    const[searchValue,setSearchValue]=useState("");
    const[allRecipes,setAllRecipes]=useState<IRecipe[]>([]);
    const[filteredRecipes,setFilteredRecipes]=useState<IRecipe[]>([]);
    const handelFetchAllRecipes=async()=>{
        const response=await fetchAllRecipes();
        const recipes= response ??[];
        setAllRecipes(recipes);
        setFilteredRecipes(recipes);
    };
    const handelAddToFavourites=async(recipe:IAddToFavourites)=>{
if(!user) return;
try{
await fetchAddToFavourites({userId:user.id,...recipe});
Alert.alert("Success","Recipe added to favourites");
}
catch(error){
console.error("Error adding recipe to favourites:", error);
}
    };
    useEffect(()=>{
        const search=searchValue.trim().toLowerCase();
        if(!search){
            setFilteredRecipes(allRecipes);
            return;
        }
        const filtered=allRecipes.filter((recipe)=>
        recipe.name.toLowerCase().includes(search),);
        setFilteredRecipes(filtered);
    },[searchValue,allRecipes]);
    useEffect(()=>{
        handelFetchAllRecipes();
    }, []);
    return (
  <SafeAreaView className="flex-1 bg-vista-white" edges={["top"]}>
 <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
    <View className="relative">
<TextInput className="h-12 rounded-lg bg-global pl-12" placeholder="Search recipes..." placeholderTextColor="#594139" value={searchValue} onChangeText={setSearchValue} />
   <Feather name="search" size={22} color="#594139" style={{ position: 'absolute', left: 12, top: 8}} />
    </View>
    <View className="mt-4 pb-4">
      {filteredRecipes.map((recipe) => (
  <SearchCardRecipe
    key={recipe._id}
    recipe={recipe}
    onAddToFavourites={handelAddToFavourites}
  />
))}
</View>
 </ScrollView>
</SafeAreaView>
    );
}
export default SearchScreen ;