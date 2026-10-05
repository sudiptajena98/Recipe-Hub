import { View, Text, Image, Pressable } from "react-native";
import useSocialAuth from "@/hooks/useSocialAuth";

const SignInScreen = () => {
  const{handleSocialAuth}= useSocialAuth();
  return (
    <View className="flex-1 bg-white">

      {/* Hero Image */}
      <Image
        source={require("@/assets/images/hero.png")}
        className="w-full h-[55%]"
        resizeMode="cover"
      />

      {/* White Content Card */}
      <View className="-mt-6 flex-1 bg-white rounded-tr-[2.375rem] rounded-tl-[2.375rem] p-8">

        {/* Title + Description */}
        <View className="flex gap-2 items-center">

          <Text className="text-center text-cod-gray text-4xl font-bold">
            Discover Amazing Recipes
          </Text>

          <Text className="text-base text-kabul text-center">
            Cook smarter with thousands of curated recipes designed for every
            taste and skill level.
          </Text>

        </View>

        {/* Buttons */}
        <View className="mt-6 gap-4 flex items-center">

          {/* Google */}
          <Pressable
          onPress={()=>handleSocialAuth("oauth_google")}
            className="flex items-center justify-center flex-row gap-4 w-full border border-ebb py-4 rounded-full"
          >
            <Image
              source={require("@/assets/images/google.png")}
              style={{ width: 20, height: 20 }}
            />

            <Text className="text-base font-semibold text-cod-gray">
              Continue with Google
            </Text>
          </Pressable>

          {/* Apple */}
          <Pressable
           onPress={()=>handleSocialAuth("oauth_apple")}
            className="bg-black flex items-center justify-center flex-row gap-4 w-full border border-ebb py-4 rounded-full"
          >
            <Image
              source={require("@/assets/images/apple.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: "white",
              }}
            />

            <Text className="text-base font-semibold text-white">
              Continue with Apple
            </Text>
          </Pressable>

          {/* Terms */}
          <Text className="W-[80%] text-center mt-9 text-kabul font-weight-medium">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>

        </View>
      </View>
    </View>
  );
};

export default SignInScreen;