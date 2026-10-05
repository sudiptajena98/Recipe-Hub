import {useState} from"react";
import {useSSO} from "@clerk/expo";
import {Alert} from "react-native";
const useSocialAuth = () => {
const[loadingStrategy,setLoadingStrategy] = useState<string |null>(null);
const {startSSOFlow}= useSSO();
const handleSocialAuth = async (strategy:"oauth_google" |"oauth_apple") => {
    if(loadingStrategy) 
        return;
    setLoadingStrategy(strategy);
    try{
        const {createdSessionId,setActive}=await startSSOFlow({strategy})
        if(!createdSessionId || !setActive){
            Alert.alert("Sign-in incompleted"," sign-in did not complete .please try again later.");
        return;
    }
    await setActive({session:createdSessionId});
} catch(error){
    console.log("Error during social auth:",error);
    Alert.alert("Error failed to sign in. Please try again later.");
} finally {
    setLoadingStrategy(null);
}
};
return{handleSocialAuth,loadingStrategy};
};
export default useSocialAuth;
