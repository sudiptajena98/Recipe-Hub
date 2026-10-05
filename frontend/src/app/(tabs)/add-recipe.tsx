import SafeAreaView from "@/components/SafeAreaView";
import { View, Text, TextInput, Pressable, ScrollView, Image,Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { createRecipe } from "../../../api/recipe/recipe";
const AddingRecipeScreen = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState("");
    const [prepTime, setPrepTime] = useState("");
    const [serving, setServing] = useState("");
    const [calorie, setCalorie] = useState("");
    const [protein, setProtein] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fats, setFats] = useState("");
    const [instruction, setInstruction] = useState("");
    const [imageUri, setImageUri] = useState("");

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };
      const handleSubmit = async () => {
    const recipeData = {
      name,
      short_description: description,
      ingredients: ingredients.split(","),
      rating: Number(rating),
      Prep_time_minutes: Number(prepTime),
      serving: Number(serving),
      calorie: Number(calorie),
      protein: Number(protein),
      carbs: Number(carbs),
      fats: Number(fats),
      thumbnail: imageUri,
      instruction: instruction.split(","),
    };
  try {
    const response = await createRecipe(recipeData);
     Alert.alert("Success", "Recipe created successfully");
  } catch (error) {
    Alert.alert("Error", "Error creating recipe");
  }
};
    return (
        <SafeAreaView className="h-full p-4 bg-vista-white" edges={["top"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text className="text-center font-bold mb-6 text-2xl">Share Your Recipe</Text>
                    <TextInput placeholder="Enter Recipe Name" className="border border-gray-300 rounded-lg  mb-2" value={name} onChangeText={setName} />
                    <TextInput placeholder="Enter Recipe Description "  className="border border-gray-300 rounded-lg mb-2" value={description} onChangeText={setDescription} />
                    <TextInput placeholder="Enter Recipe ingredients "  className="border border-gray-300 rounded-lg mb-2" value={ingredients} onChangeText={setIngredients} />
                    <TextInput placeholder=" Enter Rating" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={rating} onChangeText={setRating} />
                    <TextInput placeholder=" Enter Preparation Time (minutes)" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={prepTime} onChangeText={setPrepTime} />
                    <TextInput placeholder="Enter Serving" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={serving} onChangeText={setServing} />
                    <TextInput placeholder="Enter Calories" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={calorie} onChangeText={setCalorie} />
                    <TextInput placeholder="Enter Protein (g)" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={protein} onChangeText={setProtein} />
                    <TextInput placeholder="Enter Carbs (g)" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={carbs} onChangeText={setCarbs} />
                    <TextInput placeholder="Enter Fats (g)" keyboardType="numeric" className="border border-gray-300 rounded-lg  mb-2" value={fats} onChangeText={setFats} />
                    <Pressable onPress={pickImage} className="border border-gray-300 rounded-xl p-4 mb-4">
                        <Text>Select Recipe Image</Text>
                    </Pressable>
                    {imageUri ? (
                        <Image
                            source={{ uri: imageUri }}
                            className="w-full h-52 rounded-xl mb-4"
                        />
                    ) : null}

                    <TextInput placeholder="Instructions (comma separated)" multiline className="border border-gray-300 rounded-xl p-4 mb-4" value={instruction} onChangeText={setInstruction} />
                    <Pressable   onPress={handleSubmit} className="bg-orange-600 rounded-lg py-3 items-center">
                        <Text className="text-white font-semibold"> Submit </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default AddingRecipeScreen;