import { View, Text, Image, Pressable } from "react-native";
import { useUser, useClerk } from "@clerk/expo";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <Image
        source={{
          uri: user?.imageUrl,
        }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          marginBottom: 20,
        }}
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {user?.fullName}
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "gray",
          marginTop: 5,
          marginBottom: 30,
        }}
      >
        {user?.primaryEmailAddress?.emailAddress}
      </Text>


      <Pressable
        onPress={() => signOut()}
        style={{
          backgroundColor: "red",
          padding: 15,
          borderRadius: 10,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
}