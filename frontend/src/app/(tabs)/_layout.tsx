import {useAuth} from "@clerk/expo";
import {Redirect,Tabs} from "expo-router";

import AntDesign from '@expo/vector-icons/AntDesign';
export default function AuthRoutesLayout(){
    const {isSignedIn,isLoaded}=useAuth();
if(!isLoaded){
    return null;
}
if(!isSignedIn){
    return <Redirect href ={"/(auth)/sign-in"}/>;
}
return (
     <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#AB3500",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
  name="add-recipe"
  options={{
    title: "Add Recipe",
    tabBarIcon: ({ color, size }) => (
      <AntDesign
        name="plus"
        size={size}
        color={color}
      />
    ),
  }}
/>
    </Tabs>
)
}